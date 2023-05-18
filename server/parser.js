import excelToJson from "convert-excel-to-json";
import fs from 'fs';


export function convertExcelDooglysToJson (){
    const result = excelToJson({
        source: fs.readFileSync('./Data/Dooglys.xlsx'), //Add the data file to the "Data" directory and name it "Dooglys" with the extension ".xlsx"
        header: {
            rows: 1
        },
        columnToKey: {
            A: "id",
            C: "title",
            E: 'price'
        }
    })
    
    let objectName = Object.keys(result)[0]
    let value = result[objectName]
    return value
}

export function convertExcelTildaToJson (){
    const result = excelToJson({
        source: fs.readFileSync('./Data/Tilda.xlsx'), //Add the data file to the "Data" directory and name it "Tilda" with the extension ".xlsx"
        header: {
            rows: 1
        },
        columnToKey: {
            A: "uid",
            O: "id",
            F: "title",
            J: "price"
        },
    }) 
    let objectName = Object.keys(result)[0]
    let value = result[objectName]
    return value
}
