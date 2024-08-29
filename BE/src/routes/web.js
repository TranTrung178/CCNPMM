import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();  

let initWebRoutes = (app) => {

    router.get('/home', homeController.getHomePage); 
    router.get('/about', homeController.getAboutPage); 
    router.get('/crud', homeController.getCRUD); 
    router.post('/create-crud', homeController.createCRUD)
    router.get('/read-crud', homeController.readCRUD)
    router.get('/edit-crud', homeController.editCRUD)
    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)

    return app.use("/", router);
}

module.exports = initWebRoutes;