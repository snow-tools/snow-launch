/**
 * @project     snow-launch
 *
 * @fileName    index.tsx
 * @filePath    /src/renderer/MainFrame/index.tsx
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-22, 22:49:12
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-25, 03:38:54
 */

import React, { FunctionComponent, useEffect } from 'react'

import { css, pure } from './css'

import { Grid, Header, Icon, Menu, Dropdown } from 'semantic-ui-react'

export const MainFrame: MainFrameComponent = ({}: Props) => {
    useEffect(() => {
        console.log(JSON.stringify(css, null, 4))
    }, [])

    return (
        <div {...css.grid_container}>
            <Grid
                style={{
                    ...pure.no_neg,
                    ...pure.column_logo,
                    ...pure.accent_color,
                    ...pure.border_bottom_grey,
                    ...pure.border_bottom_dark_grey,
                }}
                verticalAlign="middle"
            >
                <Grid.Column>
                    <Header inverted size="medium">
                        Snowbot Launcher
                    </Header>
                </Grid.Column>
            </Grid>
            <div {...css.column_menu}>
                <Grid
                    style={{
                        ...pure.column_menu__menu,
                        ...pure.no_neg,
                        ...pure.accent_color,
                    }}
                    verticalAlign="middle"
                >
                    <Grid.Column>
                        <Menu
                            icon
                            inverted
                            secondary
                            compact
                            style={{ position: 'absolute', top: -17, left: 0, width: '100%' }}
                        >
                            <Menu.Item icon>
                                <Icon
                                    {...css.menu__item__icon}
                                    name="cog"
                                    color="blue"
                                    inverted
                                ></Icon>
                                Paramètres
                            </Menu.Item>

                            <Menu.Item icon>
                                <Icon
                                    {...css.menu__item__icon}
                                    name="key"
                                    color="yellow"
                                    inverted
                                ></Icon>
                                Vos clés
                            </Menu.Item>
                            <Menu.Item position="right">
                                <Menu.Item href="#" position="right">
                                    <Icon
                                        {...css.menu__item__icon}
                                        name="globe"
                                        color="blue"
                                        inverted
                                    ></Icon>
                                    Sites
                                </Menu.Item>
                                <Menu.Item href="#" position="right">
                                    <Icon
                                        {...css.menu__item__icon}
                                        name="question"
                                        color="red"
                                        inverted
                                    ></Icon>
                                    Doc
                                </Menu.Item>
                                <Menu.Item position="right">
                                    <Icon
                                        {...css.menu__item__icon}
                                        name="discord"
                                        color="violet"
                                        inverted
                                    ></Icon>
                                    Discord
                                </Menu.Item>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid>
                <Grid
                    style={{
                        ...pure.column_menu__controls,
                        ...pure.no_neg,
                        ...pure.accent_color,
                        paddingRight: 15,
                    }}
                    verticalAlign="middle"
                    textAlign="right"
                    columns={2}
                >
                    <Grid.Column>
                        <Icon link name="window minimize" inverted />
                    </Grid.Column>
                    <Grid.Column>
                        <Icon link name="close" size="large" inverted color="red" />
                    </Grid.Column>
                </Grid>
            </div>
            <Grid
                style={{
                    ...pure.column_sidebar,
                    ...pure.no_neg,
                    ...pure.accent_color,
                    ...pure.border_right_black,
                }}
            >
                <Grid.Column></Grid.Column>
            </Grid>
            <div style={{ ...pure.column_body, ...pure.default_color }}></div>
            <div {...css.row_footer}>Footer</div>
        </div>
    )
}

export interface Props {}

type MainFrameComponent = FunctionComponent<Props>
