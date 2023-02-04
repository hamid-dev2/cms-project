exports.showEditUser = (req, res, next) => {
    return res.render("pages/dashboard/user/edit-user", {
        pageTitle : "Edit User",
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

    return res.status(200).redirect("/dashboard/user")
}