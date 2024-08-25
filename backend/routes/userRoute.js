const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser.js");
const checkUser = require("../controllers/checkUser.js");
const getUser = require("../controllers/getUser.js");

router.post("/signup", createUser);
router.post("/signin", checkUser);
router.get("/users", getUser);

module.exports = router;