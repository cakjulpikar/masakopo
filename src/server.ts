import express from 'express';

import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    const app = express();
    const PORT:Number=3000;

    app.get('/', (_, res) => {
        res.send('Welcome to typescript backend!');
    })

    app.listen(PORT,() => {
        console.log('The application is listening '
            + 'on port http://localhost:'+ PORT);
    })
}).catch(error => console.log(error))
