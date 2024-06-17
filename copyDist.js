import fs from 'fs'
import path from 'path'

fs.renameSync(path.join(__dirname, './client/dist'), path.join(__dirname, './server/dist'));

console.log('Dist copied')

