const UserModel = require('@models/user-model');

exports.showProfile = async (req, res, next) => {
    const { userData : { _id } } = req.session

    return res.render("pages/dashboard/user/index", {
        pageTitle : "Dashboard",
        userData : await UserModel.findOne({ _id }) 
    })
}