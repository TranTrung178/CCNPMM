import express from "express";
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));//setup static directory containing images, css,..
    app.set("view engine", "ejs"); //setup viewEngine
    app.set("views", "./src/views") //directory containing views
}
module.exports = configViewEngine; 