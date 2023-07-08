// import express for routing purpose

const express = require("express");
const { home, createUser, getUser, deleteUser, editUser } = require("../controller/user.controller");
const router = express.Router();

router.get("/", home);

router.post('/createuser', createUser);

router.get("/getuser", getUser);

router.delete("/delete:id", deleteUser);

router.put("/editeuser:id", editUser);
module.exports = router;
