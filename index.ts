import {AppDataSource} from "./src/data-source";
import {Blog} from "./src/entity/Blog";
import express from 'express';
import bodyParser from "body-parser";
import apiRouter from "./src/routers/api.router";

const port = 8000;

AppDataSource.initialize()
    .then(() => {
        console.log('Success!');
    })
    .catch(err => {
        console.log('Error', err);
    });

export const BlogRepo = AppDataSource.getRepository(Blog);
const app = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});