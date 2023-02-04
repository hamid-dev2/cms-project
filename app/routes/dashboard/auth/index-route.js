const { Router } = require("express");
const router = Router();

const loginRoute = require('@routes/dashboard/auth/login-route');
const signupRoute = require('@routes/dashboard/auth/signup-route');

router.use(loginRoute)
router.use(signupRoute)

module.exports = router;
