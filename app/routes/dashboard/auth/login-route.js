const { Router } = require("express");
const router = Router();
const {
    showLogin,
    doLogin,
    showLogout
} = require('@controllers/dashboard/auth/login-controller');

router
    .get("/login", showLogin)
    .post("/login", doLogin)
    .get("/logout", showLogout)

module.exports = router;
