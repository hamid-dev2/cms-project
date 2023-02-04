const { Router } = require("express");
const router = Router();

const {
    showEditUser,
    doEditUser
} = require('@controllers/dashboard/user/edit-user-controller');

router
    .get("/edit-user/:userId", showEditUser)
    .post("/edit-user/:userId", doEditUser)

module.exports = router;
