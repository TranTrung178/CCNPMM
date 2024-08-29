import bcrypt from 'bcryptjs';
import db from '../models/index.js'

const salt = bcrypt.genSaltSync(10)

let createNewUser = async (data) => {

    return new Promise(async (resolve, reject) => {

        try {
            console.log(data)
            let hashPassword = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
            })
            resolve('successfully create user with hass password')

        } catch (error) {
            reject(error)

        }
    })


}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {

        try {
            const salt = bcrypt.genSaltSync(10); // Tạo một salt với độ dài 10
            const hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword)

        } catch (e) {
            reject(e)
        }

    })
}

let getAllUser = () => {

    return new Promise(async (resovle, reject) => {

        try {
            let users = await db.User.findAll({
                raw: true,
            })
            resovle(users)

        } catch (e) {
            reject(e)
        }

    })
}

let getUserInforById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
                raw: true,
            })
            if (user)
                resolve(user)
            else
                resolve({})
        } catch (e) {
            reject(e)
        }
    })
}
let updateUserData = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address

                await user.save()

                resolve()
            } else {
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}
let deleteUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id }

            })
            if (user)
                await user.destroy()
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser,
    getAllUser,
    getUserInforById,
    updateUserData,
    deleteUserById,
}