const { Router } = require("express");
const router = Router();

const dashboardRoute = require('@routes/dashboard/user/dashboard-route');
const editUserRoute= require('@routes/dashboard/user/edit-user-route');

router
    .use(editUserRoute)
    .use(dashboardRoute)

module.exports = router;
