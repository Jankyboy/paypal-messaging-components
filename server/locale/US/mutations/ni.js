import Logo from '../logos';
import {
    basicMediaQuery,
    altContentMediaQuery,
    primaryContentMediaQuery,
    messageDisclaimerMediaQuery
} from './mediaQueries';
import { textLogoMutations, flexLogoMutations } from './common';

export const legacyNI = [
    [
        'default',
        {
            logo: Logo.PRIMARY.COLOR,
            headline: 'medium',
            subHeadline: 'small',
            disclaimer: 'legacy-medium'
        }
    ],
    [
        'size:1000x36',
        {
            styles: ['.message__sub-headline { color: #009cde }', '.message__headline { display: block }']
        }
    ],
    ['size:234x100', { logo: Logo.PRIMARY.WHITE }],
    ['size:310x100', { logo: Logo.PRIMARY.WHITE }],
    [
        'size:340x60',
        {
            logo: Logo.PRIMARY.WHITE,
            styles: ['.message { max-width: 100% }']
        }
    ]
];

export const flex = [
    [
        'default',
        {
            logo: Logo.PRIMARY.WHITE,
            headline: ['xsmall', { tag: 'medium', br: ['months'] }],
            disclaimer: 'xsmall'
        }
    ],
    [
        'ratio:1x1',
        {
            headline: ['xsmall', 'medium'],
            styles: ['@media (min-width: 150px) { .message__headline { font-size: 8vw } }']
        }
    ],
    [
        'ratio:1x4',
        {
            headline: { tag: 'medium', br: ['months'] },
            styles: [
                '.message__logo-container { margin-bottom: 30%; }',
                '.message__disclaimer span.multi:nth-of-type(1) { display: none; }',
                '@media (max-aspect-ratio: 11/40) { .message__disclaimer span.multi:nth-of-type(1) { display: block; } }',
                '.message__headline { font-size: 1.1rem }'
            ],
            disclaimer: ['xlarge', 'xsmall']
        }
    ],
    ...flexLogoMutations
];

export default {
    'layout:text': [
        [
            'default',
            ({ textSize }) => {
                const breakpointCalc = textSize * 19 + 70;
                return {
                    styles: [messageDisclaimerMediaQuery(breakpointCalc - 1), [basicMediaQuery(breakpointCalc)]],
                    logo: Logo.PRIMARY.COLOR,
                    headline: [
                        { tag: 'xsmall', br: ['time.'] },
                        { tag: 'medium', br: ['months'] }
                    ],
                    disclaimer: 'xsmall'
                };
            }
        ],
        [
            'logo.type:primary',
            ({ textSize }) => ({
                messageWidth: [textSize * 13, textSize * 32],
                styles: [
                    basicMediaQuery(textSize * 19 + 70),
                    `
                    .message__logo-container {
                        width: ${textSize * 9}px;
                    }
                    .message__content {
                        display: inline-block;
                    }
                    .message__disclaimer {
                        display: inline;
                    }
                    `,
                    altContentMediaQuery(textSize * 42.25)
                ]
            })
        ],
        [
            'logo.type:primary && logo.position:left',
            ({ textSize }) => ({
                messageWidth: [textSize * 13, textSize * 32],
                logo: [Logo.ALT_NO_PAYPAL.COLOR, Logo.PRIMARY.COLOR],
                headline: [
                    { tag: 'xsmall', br: ['time.'] },
                    { tag: 'medium', br: ['on ', 'months'] }
                ],
                styles: [
                    basicMediaQuery(textSize * 18),
                    primaryContentMediaQuery({
                        logoContainerBP: textSize * 21,
                        logoAltWidth: textSize * 5,
                        logoWidth: textSize * 9,
                        logoSvgBP: textSize * 41.75,
                        whiteSpaceBP: textSize * 27
                    }),
                    altContentMediaQuery(textSize * 41.75)
                ]
            })
        ],
        [
            'logo.type:inline',
            ({ textSize }) => ({
                styles: [basicMediaQuery(textSize * 15 + 80), `.message__logo { width: ${textSize * 7}px }`],
                logo: Logo.ALT_NO_PP.COLOR,
                headline: [
                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                    { tag: 'medium', br: ['purchases'] }
                ]
            })
        ],
        [
            'logo.type:none',
            ({ textSize }) => ({
                styles: [basicMediaQuery(textSize * 20)],
                logo: false,
                headline: [
                    {
                        tag: 'xsmall',
                        replace: [['time.', 'time']],
                        br: ['time']
                    },
                    {
                        tag: 'medium',
                        br: ['purchases']
                    }
                ]
            })
        ],
        [
            'logo.type:alternative',
            ({ textSize }) => ({
                styles: [
                    basicMediaQuery(textSize * 18),
                    altContentMediaQuery(textSize * 42),
                    `.message__logo-container { width: ${textSize * 5}px }`
                ],
                logo: Logo.ALT_NO_PAYPAL.COLOR
            })
        ],
        [
            'logo.type:primary && logo.position:top',
            ({ textSize }) => {
                const breakpointCalc = textSize * 19;
                return {
                    styles: [
                        messageDisclaimerMediaQuery(breakpointCalc - 1),
                        basicMediaQuery(breakpointCalc),
                        `
                        .message__disclaimer {
                            display:block;
                        }
                        `,
                        `.message__logo-container { width: ${textSize * 9}px }`
                    ]
                };
            }
        ],
        [
            'logo.type:alternative && logo.position:top',
            ({ textSize }) => ({
                styles: [basicMediaQuery(textSize * 18.5), `.message__logo-container { width: ${textSize * 5}px }`]
            })
        ],
        ...textLogoMutations
    ],

    'layout:flex': flex,
    'layout:legacy': legacyNI
};