const { Router } = require("express");
const router = Router();

const dashboardRoute = require('@routes/dashboard/admin/dashboard-route');
const usersRoute = require('@routes/dashboard/admin/users-route');

router
    .use("/users", usersRoute)
    .use(dashboardRoute)

module.exports = router;
