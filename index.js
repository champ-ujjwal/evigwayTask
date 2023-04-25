const express = require('express');
const mongoose= require('mongoose')
require('dotenv').config() ;

const authroute = require('./routes/authRoute')
const eventsroute = require('./routes/eventsRoute')

const app = express() ;

app.use(express.json()) ;
app.use('/api/auth',authroute);
app.use('/api/event',eventsroute);

try {
    mongoose.connect('mongodb+srv://b200062:7xoqPrGcnwZRqlac@cluster0.lggaopv.mongodb.net/?retryWrites=true&w=majority').then( ()=>{
        console.log("mongodb connected...") ;
        app.listen(process.env.PORT || 4000 , ()=>
        console.log("listening on port " + process.env.PORT)) ;
    })
} catch (error) {
    console.log(error)
}