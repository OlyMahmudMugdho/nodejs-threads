import {parentPort} from 'worker_threads'

parentPort.on('message', (message) => {
    const pi = 3.14
    parentPort.postMessage(pi)
})