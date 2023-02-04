const UserModel = require('@models/user-model');
const bcrypt = require('bcryptjs');

exports.showLogin = (req, res, next) => {
    return res.render("pages/dashboard/auth/login", {
        pageTitle : "Login",
        success : req.flash("success_msg"),
        error : req.flash("error_msg")
    })
}

exports.doLogin = async (req, res, next) => {
    const { email, password } = req.body

    const validUser = await UserModel.findOne({ email })

    if(!validUser) {
        req.flash("error_msg", "Email is not valid!")
        return res.redirect("/dashboard/auth/login")
    }

    const validPassword = await bcrypt.compare(password, validUser.password)

    if(!validPassword) {
        req.flash("error_msg", "Password is not valid!")
        return res.redirect("/dashboard/auth/login")
    }

    const redirectPath = validUser.role === "admin" ? '/dashboard/admin' : '/dashboard/user'  

    req.session.userData = validUser

    return res.status(200).redirect(redirectPath)
}

exports.showLogout = async (req, res, next) => {
    return req.session.destroy(() => res.redirect("/dashboard/auth/login"))
}