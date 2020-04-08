const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })) //form
app.use(morgan("dev"));

//ROUTES
app.get("/", function(req,res){
    res.send("Welcome");    
})

app.post("/login", (req,res)=>{
    // Check that user is in db
    // check that password is correct
    //generate token and send to user
    const {name, email, password} = req.body;
    const response = `You sent name = ${name} , email=${email} , password=${password}`;
    res.send(response);
})

const port = process.env.PORT || 6112;
app.listen(port, function () {
	console.log(`Server is listening on port: ${port}`);
});

