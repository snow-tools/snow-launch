/**
 * @project     snow-launch
 * 
 * @fileName    app.tsx
 * @filePath    /src/renderer/app.tsx
 * 
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-22, 22:58:15
 * 
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-24, 22:47:10
 */

import './_style/global.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { MainFrame } from './MainFrame'

import 'fomantic-ui-css/semantic.min.css'

// Create main element
const mainElement = document.createElement('div')
document.body.appendChild(mainElement);

// Render components
const render = (Component: React.FunctionComponent) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mainElement
    );
};

render(MainFrame);
