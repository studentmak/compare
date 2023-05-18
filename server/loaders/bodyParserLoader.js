import bodyParser from 'body-parser';

export function bodyParserLoader(app) {
    app.use(bodyParser.json());
}