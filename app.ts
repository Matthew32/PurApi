// Import dot env config.
import * as dotenv from "dotenv";
dotenv.config();
// Import express and cors library.
import express from 'express';
import cors from 'cors';

// Import product routes.
import purRoute from "./src/routes/pur.route";

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/img',express.static(`${__dirname}/public/img`))
app.use('/pur', purRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});