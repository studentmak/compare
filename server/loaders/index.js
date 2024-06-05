import { Routers } from "../routers/index.js";
import { bodyParserLoader } from "./bodyParserLoader.js";
import { configLoader } from "./configLoader.js";
import { useCors } from "./cors.js";
import { listeningPort } from "./port.js";
import morgan from "morgan"

export function loaders(app){
    configLoader()
    bodyParserLoader(app)
    useCors(app)
    listeningPort(app)
    Routers(app)
    morgan()
}