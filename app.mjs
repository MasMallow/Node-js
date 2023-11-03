import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';

const app = express();
const port = 3000;
app.use(morgan('combined'));

app.get("/",(req, res)=>{
    res.send('hello 005');
});

app.listen(port, ()=>{
    const debugLog = debug('app');
    debugLog("listening on port " + chalk.blue(port));
});