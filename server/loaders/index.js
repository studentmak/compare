import { convertExcelToJson } from "../parser.js";
import  fs  from "fs"
import { Routers } from "../routers/index.js";
import { bodyParserLoader } from "./bodyParserLoader.js";
import { configLoader } from "./configLoader.js";
import { useCors } from "./cors.js";
import { listeningPort } from "./port.js";
import morgan from "morgan"




function scandirDataDooglys () {
    let result = []
    fs.readdirSync('./Data/Dooglys').forEach(file =>{
        result.push(file)
    })
    return result
}

function scandirDataTilda () {
    let result = []
    fs.readdirSync('./Data/Tilda').forEach(file =>{
        result.push(file)
    })
    return result
}

function writeFiles(name, path){
    fs.writeFile(`/Users/majarik/Desktop/12345/${name}.txt`, JSON.stringify(convertExcelToJson(path, name).map(i => ({uid:`${i.uid}`, id:`${i.id}`, name:`${i.title}`}))), err =>{
    if (err){
        console.error(err)
    }
    })
}

function writeFilesConverterExcelToJson () {
    let filesDirDooglys = scandirDataDooglys()
    let filesDirTilda = scandirDataTilda()
    for(let i=0; i < filesDirTilda.length; i++){  
        writeFiles(filesDirTilda[i].replace(/\s+/g, "'"), 'Tilda')
    }
}
writeFilesConverterExcelToJson()

export function loaders(app){
    configLoader()
    bodyParserLoader(app)
    useCors(app)
    listeningPort(app)
    Routers(app)
    morgan()
}