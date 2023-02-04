const { Router } = require("express");
const router = Router();

const {
    showDashboard
} = require('@controllers/dashboard/admin/dashboard-controller');

router.get("/", showDashboard)

module.exports = router;
