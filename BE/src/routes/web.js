import express from "express"; //gọi Express
import homeController from "../controllers/homeController"; //gọi controller

let router = express.Router();  //khởi tạo Route

let initWebRoutes = (app) => {
    //cách 1:
    router.get('/', (req,res) => {
        return res.send('Nguyễn Hữu Trung');
    });
    //cách 2: gọi hàm trong controller
    router.get('/home', homeController.getHomePage); //url cho trang chủ
    router.get('/about', homeController.getAboutPage); //url cho trang about

    return app.use("/", router); //url mặc định
}

module.exports = initWebRoutes;