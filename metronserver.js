import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import metronrouter from './controller/metroncontroller.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const connection_url = process.env.connectionurl;
const port = process.env.PORT;

app.use(bodyParser.json(
    {
        limit: '30mb',
        extended: true
    }
));

app.use(bodyParser.urlencoded(
    {
        limit: "30mb",
        extended: true
    }
));

app.use(cors());

app.use('/mt', metronrouter);

app.get("/", (request, response) => {
    response.send("Metron is live");
})

mongoose
    .connect(connection_url)
    .then(
        () => {
            console.log("Connection established with database")
        }
    )
    .then(
        app.listen(port, () => {
            console.log("Serve now running on port " + port)
        })
    )
    .catch(
        error => {
            console.log("Error " + error)
        }
    )



