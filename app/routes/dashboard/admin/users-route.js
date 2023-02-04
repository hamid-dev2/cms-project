const { Router } = require("express");
const router = Router();

const {
    showAllUsers,
    showAddUser,
    showEditUser,
    doAddUser,
    doAllUsers,
    doEditUser
} = require('@controllers/dashboard/admin/users-controller');


router
    .get("/edit-user/:userId", showEditUser)
    .post("/edit-user/:userId", doEditUser)
    .get("/add-user", showAddUser)
    .post("/add-user", doAddUser)
    .get("/all-users", showAllUsers)
    .post("/all-users", doAllUsers)


module.exports = router;
