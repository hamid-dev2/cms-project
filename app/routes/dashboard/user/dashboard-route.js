const { Router } = require("express");
const router = Router();

const {
    showProfile
} = require('@controllers/dashboard/user/profile-controller');

router
    .get("/", showProfile)

module.exports = router;
