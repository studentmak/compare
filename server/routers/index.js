import { convertExcelDooglysToJson, convertExcelTildaToJson } from "../parser.js"


export function Routers (app) {

    app.get('/converter', (req, res) =>{
    let resultTilda = convertExcelTildaToJson().map(obj => ({...obj, duplicated: false}))
    let resultDooglys = convertExcelDooglysToJson().map(obj => ({...obj, duplicated: false}))
    let result_Tilda_Dooglys = {resultTilda, resultDooglys}
    console.log(result_Tilda_Dooglys)
    res.send(result_Tilda_Dooglys)
    })
}

