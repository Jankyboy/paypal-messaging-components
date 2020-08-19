/* istanbul ignore file */
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 0.002,
    customDiffConfig: {
        threshold: 0.05
    }
});

expect.extend({ toMatchImageSnapshot });

const getConfigStrParts = (obj, keyPrefix = '') => {
    return Object.entries(obj).reduce((accumulator, [key, val]) => {
        const totalKey = keyPrefix === '' ? key : `${keyPrefix}.${key}`;
        if (typeof val === 'object') return [...accumulator, ...getConfigStrParts(val, totalKey)];

        // Do not include the markup url in filename
        if (key === 'markup') return accumulator;

        return [...accumulator, `${totalKey}-${val}`];
    }, []);
};

const getConfigStr = obj =>
    getConfigStrParts(obj)
        .sort()
        .join('_');

const getTestNameParts = (locale, { account, style: { layout, ...style } }) => {
    const styleStr = getConfigStr(style);

    return [locale, account, layout, styleStr];
};

const waitForBanner = async timeout => {
    try {
        // console.log('waitFor load');
        // await page.waitForNavigation({ waitUntil: 'load' }); // consider nav done when the load event is fired
        // console.log('waitFor domcontentloaded');
        // await page.waitForNavigation({ waitUntil: 'domcontentloaded' }); // consider nav done when the DOMContentLoaded event is fired
        console.log('waitFor networkidle0');
        await page.waitForNavigation({ waitUntil: 'networkidle0' }); // consider nav done when no more than 0 network connections for at least 500 ms

        await page.waitForFunction(
            () => {
                const el = document.querySelector('[data-pp-id] iframe');
                return el && el.clientHeight !== 0;
            },
            {
                polling: 10,
                timeout
            }
        );

        // Give time for fonts to load after banner is rendered
        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (e) {
        // Do nothing
    }
};

export default function createBannerTest(locale, testPage = 'banner.html') {
    return (viewport, config) => {
        const testNameParts = getTestNameParts(locale, config);
        test(testNameParts.slice(-1)[0], async () => {
            await page.setViewport(viewport);

            await page.goto(`http://localhost.paypal.com:8080/${testPage}?config=${JSON.stringify(config)}`);

            await waitForBanner(1000);

            const image = await page.screenshot(
                {
                    clip: {
                        ...viewport,
                        x: 0,
                        y: 0
                    }
                },
                3
            );

            const customSnapshotIdentifier = `${testNameParts.pop()}-${viewport.width}`;
            expect(image).toMatchImageSnapshot({
                customSnapshotsDir: ['./tests/functional/snapshots', ...testNameParts].join('/'),
                customSnapshotIdentifier
            });
        });
    };
}
