/**
 * @project     snow-launch
 *
 * @fileName    css.ts
 * @filePath    /src/renderer/MainFrame/css.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-22, 22:57:24
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 05:02:12
 */

import { Stylesheet, PureStyles } from '@/_style/styler'

export const stylesheet: Stylesheet = new Stylesheet({
    test_color: {
        color: 'red'
    }
} as PureStyles)

export const css = stylesheet.styles
export const pure = stylesheet.pureStyles
