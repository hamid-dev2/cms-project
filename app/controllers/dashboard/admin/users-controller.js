const UserModel = require('@models/user-model');
const bcrypt = require('bcryptjs');

exports.showAddUser = async (req, res, next) => {
    return res.render("pages/dashboard/admin/add-user", {
        pageTitle : "Add User",
        email : req.flash("email_msg"),
        password : req.flash("password_msg"),
        userData : req.session.userData
    })
}

exports.doAddUser = async (req, res, next) => {
    const { name, email, skill, role, password, confirm_password } = req.body

    const validEmail = await UserModel.findOne({ email })

    
    if(validEmail) {
        req.flash("email_msg", "With this email already registered!")
        return res.redirect("/dashboard/admin/users/add-user")
    }


    if(password !== confirm_password) {
        req.flash("password_msg", "Password is not valid!")
        return res.redirect("/dashboard/admin/users/add-user")
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = new UserModel({
        name,
        email,
        password : hashedPassword,
        skill,
        role
    })
    await newUser.save()

    return res.status(201).redirect("/dashboard/admin/users/all-users")
}

exports.showAllUsers = async (req, res, next) => {
    return res.render("pages/dashboard/admin/all-users", {
        pageTitle : "All Users",
        users : await UserModel.find({}),
        userData : req.session.userData
    })
}

exports.doAllUsers = async (req, res, next) => {
    // ? For deleteing the user by userId
    const { userId } = req.body

    const user = await UserModel.findOne({ _id : userId })
    await user.remove()

    return res.status(200).redirect("/dashboard/admin/users/all-users")
}

exports.showEditUser = async (req, res, next) => {
    const { userId } = req.params

    return res.render("pages/dashboard/admin/edit-user", {
        pageTitle : "Edit User",
        user : await UserModel.findOne({ _id : userId }),
        userData : req.session.userData
    })
}

exports.doEditUser = async (req, res, next) => {
    const { userId } = req.params

    await UserModel.updateOne(
        { _id : userId },
        {
            $set : { ...req.body }
        }
    )

    return res.status(200).redirect("/dashboard/admin/users/all-users")
}