import { exec } from 'child_process';

function build(callback) {
    let child = exec('cd ./client && npm i && npm run build && cd .. && node ./copyDist.js && cd ./server && npm i' , (error) => {
        if (error) {
            console.error(error)
        }
        callback()
    })
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}



build(function () {
    console.log('Build successful')
})
