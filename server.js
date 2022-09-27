import config from './config.js'
import apiRouter from './api/index.js';
import express from 'express'

const server = express()

server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/',(res)=>{
    res.render('index',{
        content: "text from ejs"
    })
})

server.listen(config.port,()=>{
    console.info("Listening on port ", config.port);
})