import excelToJson from "convert-excel-to-json";
import fs from 'fs';


export function convertExcelDooglysToJson (){
    const result = excelToJson({
        source: fs.readFileSync('./Data/Dooglys/Dooglys.xlsx'), //Add the data file to the "Data" directory and name it "Dooglys" with the extension ".xlsx"
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
        source: fs.readFileSync('./Data/Tilda/Tilda.xlsx'), //Add the data file to the "Data" directory and name it "Tilda" with the extension ".xlsx"
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

function convertExcelToJson (path, name, property){
    const result = excelToJson({
        source: fs.readFileSync(`./Data/${path}/${name}`), //Add the data file to the "Data" directory and name it "Tilda" with the extension ".xlsx"
        header: {
            rows: 1
        },
        columnToKey: property,
    }) 
    let objectName = Object.keys(result)[0]
    let value = result[objectName]
    return value
}

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

function writeFiles(name, path, property, name_category){
    let initial_data = convertExcelToJson(path, name, property).map(i => ({uid:`${i.uid}`, category:`${i.category}`, id:`${i.id}`, name:`${i.title}`, parent_uid: `${i.parent_uid}`}))

    let first_scan = initial_data.filter(i=> (i.category.toUpperCase().includes(name_category.toUpperCase())))
    let second_scan = initial_data.filter(i => first_scan.map(i2 => i2.id).includes(i.id))
    let third_scan = second_scan.filter(i => i.parent_uid !== 'undefined')
    let fourth_scan = initial_data.filter(i => third_scan.map(i2 => i2.parent_uid).includes(i.parent_uid))
    let fifth_scan = first_scan.filter(i => !fourth_scan.map(i2 => i2.parent_uid).includes(i.parent_uid))

    let result = [...fourth_scan, ...fifth_scan]
    
    fs.writeFile(`./Data/${name_category}.txt`, JSON.stringify(result), 
    err =>{
    if (err){
        console.error(err)
    }
    })
}

export function writeFilesConverterExcelToJson () {
    let filesDirDooglys = scandirDataDooglys()
    let filesDirTilda = scandirDataTilda()
    let name_category = ['Наборы', 'Закуски', 'Горячие блюда', 'Десерты', 'Напитки', 'Салаты', 'Супы']
    for(let i=0; i < name_category.length; i++){  
        writeFiles(filesDirTilda[0].replace(/\s+/g, "'"), 'Tilda', {A: "uid", E: "category", O: "id",F: "title", P: "parent_uid"}, name_category[i]) //{uid:`${i.uid}`, category:`${i.category}`, id:`${i.id}`, name:`${i.title}`}
    }
    // for(let i=0; i < filesDirDooglys.length; i++){  
    //     writeFiles(filesDirDooglys[i].replace(/\s+/g, "'"), 'Dooglys', {A: "id", C: "title"}) //{id:`${i.id}`, name:`${i.title}`}
    // }
}

