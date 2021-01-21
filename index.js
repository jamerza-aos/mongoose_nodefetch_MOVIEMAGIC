require('dotenv').config()
const fetch = require('node-fetch');
const express = require('express')
const app = express()
app.use(express.json())
const movie= require('./models/Items')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose');

mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to my DB')
        app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))
    })
    .catch(err => console.log(err))
  

    // https://api.themoviedb.org/3/movie/550?api_key=4f2d4313669b932746a7cbe1b3fff187

    app.get('/', (req, res) => {  

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=f9c8e3bf33252c8c1179e8b6ca4946f1')
    .then(res => res.json())
    .then((json)=>{
        //  console.log(json) 
        data=json.results
        console.log(data);
        res.render('index',{allmoviedata:data})
        
    })
    .catch(err => console.log(err))     
    })



    // https://api.themoviedb.org/3/movie/week?api_key=f9c8e3bf33252c8c1179e8b6ca4946f1