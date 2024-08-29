import express from "express"; 
import bodyParser from "body-parser";

require('dotenv').config();

let app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
});

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let port = process.env.PORT || 6969;

//run server
app.listen(port, () => {
    console.log("Backend Nodejs is runing http://localhost:" + port)
})