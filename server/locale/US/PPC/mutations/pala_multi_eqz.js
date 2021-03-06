import Logo from '../logos';
import { altContentMediaQuery, primaryContentMediaQuery } from './mediaQueries';
import { textLogoMutations, flexLogoMutations } from './common';

export default {
    'layout:text': [
        [
            'default',
            ({ textSize }) => ({
                logo: Logo.SINGLE_LINE.COLOR,
                messageWidth: [textSize * 11, textSize * 18],
                headline: {
                    tag: 'small',
                    br: ['/mo.']
                },
                disclaimer: 'small'
            })
        ],
        [
            'logo.type:primary && logo.position:left',
            ({ textSize }) => ({
                logo: [Logo.SINGLE_LINE_NO_PAYPAL.COLOR, Logo.SINGLE_LINE.COLOR],
                styles: [
                    primaryContentMediaQuery({
                        logoContainerBP: textSize * 21,
                        width: { smallLogo: textSize * 5, largeLogo: textSize * 9 },
                        whiteSpaceBP: textSize * 27
                    }),
                    `
                    @media (max-width: ${textSize * 11}px) {
                        .message__messaging { display: block; }
                    }
                    `
                ]
            })
        ],
        [
            'logo.type:primary && logo.position:top',
            ({ textSize }) => ({
                styles: [`.message__logo-container { width: ${textSize * 9}px }`]
            })
        ],
        [
            'logo.type:primary && logo.position:right',
            ({ textSize }) => ({
                messageWidth: [textSize * 10, 1000],
                styles: [
                    `
                    .message__logo-container { width: ${textSize * 9}px }
                    .message__content { display: inline-block; }
                    `,
                    altContentMediaQuery(textSize * 34.3)
                ]
            })
        ],
        [
            'logo.type:inline',
            ({ textSize }) => ({
                styles: [`.message__logo { width: ${textSize * 7}px }`],
                logo: Logo.SINGLE_LINE_NO_PP.COLOR,
                messageWidth: [textSize * 19, 1000],
                headline: {
                    replace: [['APR.', 'APR']],
                    br: ['APR']
                }
            })
        ],
        [
            'logo.type:none',
            ({ textSize }) => ({
                logo: false,
                messageWidth: [textSize * 17, 1000],
                headline: {
                    replace: [['APR.', 'APR']],
                    br: ['APR']
                }
            })
        ],
        [
            'logo.type:alternative',
            ({ textSize }) => ({
                styles: [`.message__logo-container { width: ${textSize * 5}px }`],
                messageWidth: false,
                logo: Logo.SINGLE_LINE_NO_PAYPAL.COLOR
            })
        ],
        [
            'logo.type:alternative && logo.position:top',
            ({ textSize }) => ({
                styles: [`.message__logo-container { width: ${textSize * 5}px }`]
            })
        ],
        [
            'logo.type:alternative && logo.position:right',
            ({ textSize }) => ({
                styles: [
                    altContentMediaQuery(textSize * 29.1),
                    `.message__logo-container { width: ${textSize * 5}px }`
                ],
                logo: Logo.SINGLE_LINE_NO_PAYPAL.COLOR
            })
        ],
        ...textLogoMutations
    ],

    'layout:flex': [
        [
            'default',
            {
                logo: Logo.STACKED.WHITE,
                headline: { tag: 'medium', br: ['low as', 'at'] },
                disclaimer: 'small'
            }
        ],
        ...flexLogoMutations
    ]
};
