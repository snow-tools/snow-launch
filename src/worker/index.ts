/**
 * @project     snow-launch
 *
 * @fileName    index.ts
 * @filePath    /src/worker/index.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 03:48:58
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 06:03:09
 */

console.info('Starting worker ...')

import { LaunchSnowbotData } from '../_network/data-types/LaunchSnowbotData'
import { IpcMessageType } from '../_network/IpcMessage'
import { MessagesHandlers } from '../_network/ipcServer'
import { startServer, send } from '../_network/ipcServer'
/**
 * Worker constants
 */

const { SEARCH_SNOWBOT_UPDATES, LAUNCH_SNOWBOT } = IpcMessageType
const SNOWBOT_UPDATES_LOOKUP_TIME = 30 * 60 * 1000

/**
 * Interprocess Comunication (IPC) message handler definition
 */

// messagesHandler will contain all listeners functions
const messagesHandlers: MessagesHandlers = {}

// listener will be store using SEARCH_SNOWBOT_UPDATES enum value, aka messagesHandlers[0]
messagesHandlers[SEARCH_SNOWBOT_UPDATES] = () => {}

// LaunchSnowbotData inherit from BaseData, allowing null data. This is why we could ignore parameter in the prev listener
messagesHandlers[LAUNCH_SNOWBOT] = (data: LaunchSnowbotData) => {}

// start IPC server
startServer(messagesHandlers)

/**
 * Updates automatic fetch
 */

setInterval(messagesHandlers[SEARCH_SNOWBOT_UPDATES], SNOWBOT_UPDATES_LOOKUP_TIME)

console.info('Worker is running')
