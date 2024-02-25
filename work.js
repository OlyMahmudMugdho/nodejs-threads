import {parentPort} from 'worker_threads'

parentPort.on('message', async (message) => {
    await sleepAndPrint(5)
})


const sleepAndPrint = async (end) => {
    for (let i = 1; i <= end; i++) {
       await new Promise((resolve) => {
        setTimeout( () => {console.log(i); resolve()}, 1000)
       })
    }
    parentPort.close()
}