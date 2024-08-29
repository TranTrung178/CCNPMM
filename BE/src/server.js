import express from "express"; 
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";

require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
});

let port = process.env.PORT || 6969;

//run server
app.listen(port, () => {
    console.log("Backend Nodejs is runing http://localhost:" + port)
})