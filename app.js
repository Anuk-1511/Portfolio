const express = require('express');
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
} )

app.listen(8080, function(err){
    if(err)
        console.log(err);
    else
        console.log("Server started on port 8080");
})