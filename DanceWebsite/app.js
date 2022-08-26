const express = require('express');
const path = require('path');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/contactDanceDB',{useNewUrlParser:true});

const app = express();
const port = 80;

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    gender:String,
    reason:String
});

var Contact = mongoose.model('contact',contactSchema)

//- EXPRESS Specific configuration 
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//- PUG Specific configuration

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

//- ENDPOINTS
app.get('/',(req,res)=>{
    const var1 = {}
    res.status(200).render('Home.pug',var1);
})

app.get('/contact',(req,res)=>{
    const var1 = {}
    res.status(200).render('contact.pug',var1);
})

app.post('/contact',(req,res)=>{
    var userData = new Contact(req.body);
    userData.save().then(()=>{
        res.send("Registerd Successfully Wait for The Response.Thankyou!");
    }).catch(()=>{
        res.status(404).send("Opps! Sorry.Try Again");
    });
})

//- Start the server
app.listen(port,()=>{
    console.log(`The application start successfully on port ${port}`)
})