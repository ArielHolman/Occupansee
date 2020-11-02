const express = require("express");
const usersControllers = require("../controllers/users");

const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router.get("/:user_id", usersControllers.getUserById);

router.post("/", usersControllers.createUser);

router.put("/:user_id", usersControllers.updateUserById);

router.delete("/:user_id", usersControllers.deleteUserById);

module.exports = router;
