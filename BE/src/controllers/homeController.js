
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
// object: {
//     key: '',
//     value: ''
// }
//export ra object
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}