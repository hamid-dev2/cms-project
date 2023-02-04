exports.$404_error = (req, res, next) => {
    return res.render("errors/web/404", {
        pageTitle : "404"
    })
}