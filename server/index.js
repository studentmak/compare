import express from 'express';
import connectHistory from 'connect-history-api-fallback'
import { loaders } from './loaders/index.js';


function startServer() {
    const app = express();
    loaders(app)
    console.log('complete')
} startServer(); 


