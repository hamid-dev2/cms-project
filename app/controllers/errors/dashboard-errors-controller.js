exports.$404_error = (req, res , next) => {
    return res.render("errors/dashboard/404", {
        pageTitle : "404"
    })
}