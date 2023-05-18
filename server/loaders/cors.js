import cors from 'cors';

export function useCors(app) {
    if (process.env.NODE_ENV === 'development'){
        app.use(cors())
    }
}