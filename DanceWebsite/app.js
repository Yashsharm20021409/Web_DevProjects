const express = require('express');
const path = require('path');

const app = express();
const port = 80;

//- EXPRESS Specific configuration 
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//- PUG Specific configuration

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//- ENDPOINTS
app.get('/',(req,res)=>{
    const var1 = {}
    res.status(200).render('index.pug',var1);
})

//- Start the server
app.listen(port,()=>{
    console.log(`The application start successfully on port ${port}`)
})