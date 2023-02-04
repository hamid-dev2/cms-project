const { Router } = require("express");
const router = Router();
const {
    showSignup,
    doSignup
} = require('@controllers/dashboard/auth/signup-controller');

router
    .get("/signup", showSignup)
    .post("/signup", doSignup)

module.exports = router;
