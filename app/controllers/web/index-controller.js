const UserModel = require('@models/user-model');

exports.showWeb = async (req, res, next) => {
    return res.render("pages/web/index", {
        pageTitle : "Web App",
        users : await UserModel.find({ role : "user" }),
        userData : req.session.userData
    })
}