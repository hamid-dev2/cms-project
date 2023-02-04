const express = require('express');
const app = express()
const path = require('path');
const { APP_PORT } = process.env
const mongoConnect = require('@databases/mongodb-database');
const dashboardRoute = require('@routes/dashboard/main-route');
const webAppRoute = require('@routes/web/index-route');
const session = require('express-session');
const flash = require('connect-flash');

module.exports = () => {
    app.set("view engine", "ejs")
    app.set("views", path.join(__dirname, "views"))
    app.use(express.urlencoded({ extended : false }))
    app.use(express.static(path.join(__dirname, "../public")))

    app.use(
        session({
            secret : "secret_key",
            resave : false,
            saveUninitialized : true,
            unset : "destroy",
            cookie : { maxAge : 600000 }
        })
    )

    app.use(flash());

    app.use("/dashboard", dashboardRoute)
    app.use("/", webAppRoute)
    
    mongoConnect()
        .then(() => app.listen(APP_PORT, () => console.log("App is running...")))
}