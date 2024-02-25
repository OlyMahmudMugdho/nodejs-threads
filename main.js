import {Worker} from 'worker_threads';

const worker = new Worker('./work.js')

worker.on('message', (result) => {
    console.log(`message from worker : ${result}`)
})

worker.postMessage('hello')