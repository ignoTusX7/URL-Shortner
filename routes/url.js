const express = require("express");

const router = express.Router();
const { createUrl } = require("../controller/urls");

router.post("/", createUrl);

module.exports = router ;
