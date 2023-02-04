module.exports = (req, res, next) => {
    const { userData } = req.session
    
    if(userData) {
        const { role } = userData

        const redirectPath = role === 'admin' ? "/dashboard/admin" : "/dashboard/user"

        return res.redirect(redirectPath)
    }
    
    res.redirect("/dashboard/auth/login")
    
    return next()
}