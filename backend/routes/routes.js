const express = require("express");
const { testController } = require("../controller/controller");

const router = express.Router();

router.get("/testController",testController);

module.exports = router;