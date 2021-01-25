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
 * @updatedAt   2021-01-25, 03:44:17
 */

import { Stylesheet, PureStyles } from '@/_style/styler'

const border_bottom_grey = {
    borderBottom: '0.5px solid grey',
    boxShadow: '0px -2px 17px black',
    clipPath: 'inset(0px -1px -5px 0px)',
}

const border_right_black = {
    borderRight: '8px solid rgb(36, 36, 36)',
}

const border_bottom_dark_grey = {
    ...border_bottom_grey,
    borderBottomColor: '#484848',
}

export const stylesheet: Stylesheet = new Stylesheet({
    grid_container: {
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 210px) 1.4fr',
        gridTemplateRows: '60px 2.8fr 40px',
        gap: '0px 0px',
        height: '100vh',
    },

    column_logo: {
        gridArea: '1 / 1 / 2 / 2', // devil
        maxHeight: 60,
        marginRight: '-4px', // dirty fix clipPath offset
    },
    column_menu: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 115px',
        gridTemplateRows: '1fr',
        gap: '0px 0px',
        gridArea: '1 / 2 / 2 / 3',
        ...border_bottom_grey,
        ...border_bottom_dark_grey,
    },
    column_menu__menu: {
        gridArea: '1 / 1 / 2 / 2',
    },
    column_menu__controls: {
        gridArea: '1 / 2 / 2 / 3',
    },
    column_sidebar: {
        gridArea: '2 / 1 / 3 / 2',
        minWidth: 100,
    },
    column_body: {
        gridArea: '2 / 2 / 3 / 3',
    },
    row_footer: {
        gridArea: '3 / 1 / 4 / 3',
    },

    no_neg: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 8,
        paddingRight: 0,
    },

    default_color: {
        backgroundColor: 'rgb(60, 60, 60)',
    },
    accent_color: {
        backgroundColor: 'rgb(42, 42, 42)',
    },
    light_accent_color: {
        backgroundColor: 'rgb(50, 50, 50)',
    },

    border_bottom_grey,
    border_right_black,
    border_bottom_dark_grey,

    menu__item__icon: {
        marginRight: 10,
        paddingTop: 0.5,
    },
} as PureStyles)

export const css = stylesheet.styles
export const pure = stylesheet.pureStyles
