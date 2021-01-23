/**
 * @project     snow-launch
 *
 * @fileName    IpcMessage.ts
 * @filePath    /src/_network/IpcMessage.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 03:53:45
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 05:05:25
 */

import { BaseData } from './data-types/BaseData'

export enum IpcMessageType {
    SEARCH_SNOWBOT_UPDATES = 0,
    LAUNCH_SNOWBOT = 1,
}

export const constants = {
    PIPE_NAME: 'renderer-message',
}

export interface IpcMessage {
    type: IpcMessageType
    data: BaseData | null
}
