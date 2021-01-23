/**
 * @project     snow-launch
 *
 * @fileName    styler.ts
 * @filePath    /src/renderer/_style/styler.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-22, 23:12:33
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 05:02:43
 */

import { CSSProperties } from 'react'

export type PureStyles = {
    [className: string]: CSSProperties
}

export type Styles = {
    [className: string]: {
        style: CSSProperties
    }
}

export class Stylesheet {
    private _styles: Styles = {}
    private _pures: PureStyles = {}

    constructor(styles: PureStyles) {
        this._pures = styles
        for (const key in styles) {
            const className: string = key
            const style: CSSProperties = styles[className]
            this._styles[className] = { style }
        }
    }

    get styles(): Styles {
        return this._styles
    }

    get pureStyles(): PureStyles {
        return this._pures
    }
}
