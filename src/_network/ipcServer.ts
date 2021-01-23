/**
 * @project     snow-launch
 *
 * @fileName    ipcServer.ts
 * @filePath    /src/_network/ipcServer.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 04:28:00
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 05:03:48
 */

import { ipcRenderer } from 'electron'
import { IpcMessage, IpcMessageType, constants } from './IpcMessage'
import { BaseData } from './data-types/BaseData'

const { PIPE_NAME } = constants

export type MessagesHandlers = { [messageType: number]: (messageData: BaseData | null) => void }

let _messagesHandlers: MessagesHandlers

// listening for renderer (launcher) process messages
ipcRenderer.on(PIPE_NAME, (e, message: IpcMessage) => {
    if (!(message.type in IpcMessageType)) {
        console.error(`Error: ${message.type} is not defined`)
        return
    }

    if (!_messagesHandlers) {
        console.error('Error: renderer-message processor has been called before his initialisation')
        return
    }

    // we retrieve the correct listener using message.type, corresponding to the enum value
    _messagesHandlers[message.type](message.data || null) // and passing data as parameter if defined
})

export const startServer = (messagesHandlers: MessagesHandlers) =>
    (_messagesHandlers = messagesHandlers)

export const send = (message: IpcMessage) => ipcRenderer.send(PIPE_NAME, message)
