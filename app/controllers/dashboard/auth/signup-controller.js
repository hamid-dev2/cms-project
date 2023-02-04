const UserModel = require('@models/user-model');
const bcrypt = require('bcryptjs');

exports.showSignup = (req, res, next) => {
    return res.render("pages/dashboard/auth/signup", {
        pageTitle : "Signup",
        password : req.flash("password_msg"),
        email : req.flash("email_msg")
    })
}

exports.doSignup = async (req, res, next) => {
    const { name, email, skill, password, confirm_password } = req.body

    const userEmail = await UserModel.findOne({ email })

    if(userEmail) {
        req.flash("email_msg", "With this email already registered!")
        return res.redirect("/dashboard/auth/signup")
    }

    if(password !== confirm_password) {
        req.flash("password_msg", "password is not valid!")
        return res.redirect("/dashboard/auth/signup")
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = new UserModel({
        name,
        email,
        skill,
        password : hashedPassword
    })
    await newUser.save()
    
    req.flash("success_msg", "Signup process was success.")

    return res.status(201).redirect("/dashboard/auth/login")
}