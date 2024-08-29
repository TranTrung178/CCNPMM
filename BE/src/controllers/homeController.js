import db from '../models/index.js'; // Importing db as an object with User property
import crud from '../services/CRUDService.js'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

let createCRUD = async (req, res) => {
    console.log(req.body)
    let message = await crud.createNewUser(req.body)


    // return res.send('post crud from server');
    return res.redirect(`${`http://localhost:${process.env.PORT}`}/read-crud`);
};

let readCRUD = async (req, res) => {

    let allUser = await crud.getAllUser()
    // console.log(allUser)


    return res.render('displayCrud.ejs', {
        dataTable: allUser,
    })
};

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        try {
            let userData = await crud.getUserInforById(userId)
            return res.render('editCrud.ejs', {
                user: userData,
            })


        } catch (error) {
            console.log(error)
        }

    }
    else {
        res.send("Not id user")
    }
};
let putCRUD = async (req, res) => {
    let data = req.body
    let newUser =  await crud.updateUserData(data)

    return res.redirect(`${`http://localhost:${process.env.PORT}`}/read-crud`);
}

let deleteCRUD = async(req,res) => {

    try {

        await crud.deleteUserById(req.query.id);
        return res.redirect(`${`http://localhost:${process.env.PORT}`}/read-crud`);

    } catch (error) {
        console.log(error)
        
    }


}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    createCRUD,
    readCRUD,
    editCRUD,
    putCRUD,
    deleteCRUD,
};
