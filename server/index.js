const express = require('express');
const app = express();
const db = require('./DB/mongoose');
const contact = require('./DB/ContactSchema')
const path = require('path')
const port = process.env.PORT || 8000
const hbs = require('hbs')
// hbs stuff
app.set('view engine' , 'hbs');
const staticPath = path.join(__dirname,'public');
app.use(express.static(staticPath));


//partials
hbs.registerPartials('components')
//mongoose stuff
    app.use(express.urlencoded())
// end points 

// main index file / home page
app.get('/',(req,res)=>{
    res.render('index.hbs')
})

// contact post 
app.post('/',async(req,res)=>{
    try{
        const addContact = new contact({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })          
        const saved = await addContact.save();
        res.redirect('/')
    }catch(err){
        res.render('contactErr.hbs')
    }
})

//about folder routing

// entry point of about 
app.get('/about',(req,res) => {
    res.render('server/views/about/about.hbs')
})

// mission page of about
app.get('/about/mission', (req,res)=>{
    res.render('about/mission.hbs')
})
// facts page 
app.get('/about/facts',(req,res)=>{
    res.render('about/facts.hbs')
})
// vision page 
app.get('/about/vision',(req,res)=>{
    res.render('about/vision.hbs')
})
//facts and its all from 2020-2015
app.get('/about/2018',(req,res)=>{
    res.render('about/2018.hbs')
})

app.get('/about/2017',(req,res)=>{
    res.render('about/2017.hbs')
})
app.get('/about/2016',(req,res)=>{
    res.render('about/2016.hbs')
})
// facts ends here 

// academics in views directory
app.get('/academics/ceremony',(req,res)=>{
    res.render('academics/cermony.hbs')
})

app.get('/academics/2018',(req,res)=>{
    res.render('academics/2018.hbs')
})

app.get('/academics/2017',(req,res)=>{
    res.render('academics/2017.hbs')
})

app.get('/academics/2016',(req,res)=>{
    res.render('academics/2016.hbs')
})

app.get('/academics/department',(req,res)=>{
    res.render('academics/deparment.hbs')
})

app.get('/academics/methodology',(req,res)=>{
    res.render('academics/methodology.hbs')
})

// 404 page 
app.get('*',(req,res)=>{
    res.render('error')
})

// port listener 
app.listen(port,()=>{
    console.log("Your connection is successful");
})