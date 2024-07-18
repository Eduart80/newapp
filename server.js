import config from './config.js'
import apiRouter from './api/index.js';
import express from 'express'

const server = express()

server.set('view engine', 'ejs')
server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/',(req, res)=>{
    res.send()
})

server.get('/api',(res)=>{
    res.render('index',{
        
    })
})
server.get('/ejs',(req, res)=>{

    const today = new Date()
    const todayIs = today.getDay()
    let day =''
    if(todayIs === 6 || todayIs === 0){
        day = "weekend"
    }else{
        day = "weekday"
    }
    res.render("indexEJS",{kindOfDay:day})
})
server.listen(config.port,()=>{
    console.info("Listening on port ", config.port);
})