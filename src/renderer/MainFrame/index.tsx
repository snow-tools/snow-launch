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
 * @updatedAt   2021-01-23, 03:08:07
 */

import React, { FunctionComponent, useEffect } from 'react'

import { css } from './css'

export const MainFrame: MainFrameComponent = ({}: Props) => {

    useEffect(() => {
        console.log(JSON.stringify(css, null, 4))
    }, [])

    return (
        <section { ... css.test_color }>
            Hello World!
        </section>
    )
}

export interface Props {

}

type MainFrameComponent = FunctionComponent<Props>