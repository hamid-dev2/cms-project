const { Router } = require("express");
const router = Router()

const adminRoute = require('@routes/dashboard/admin/index-route');
const userRoute = require('@routes/dashboard/user/index-route');
const authRoute = require('@routes/dashboard/auth/index-route');
const { $404_error } = require('@controllers/errors/dashboard-errors-controller');

const auth = require('@middlewares/auth-middleware');

router
    .use("/auth", authRoute)
    // .use(auth)
    .use("/admin", adminRoute)
    .use("/user", userRoute)
    .use($404_error)

module.exports = router