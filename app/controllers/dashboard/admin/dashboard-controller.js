const UserModel = require('@models/user-model');

exports.showDashboard = async (req, res, next) => {
    return res.render("pages/dashboard/admin", {
        pageTitle : "Dashboard",
        data : [
            {
                title : "Admin Count",
                count : await UserModel.find({ role : "admin" }).count(),
                url : "/dashboard/admin/users/all-users"
            },
            {
                title : "Users Count",
                count : await UserModel.find({ role : "user" }).count(),
                url : "/dashboard/admin/users/all-users"
            }
        ],
        userData : req.session.userData
    })
}