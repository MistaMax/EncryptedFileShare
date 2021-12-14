const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.post("/",(req,res)=>{
    console.log("Received Request");
    res.redirect("/");//redirects to webpage
});

app.get("/",(req,res)=>{
    res.send("I'm here");
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Running Backend");
});