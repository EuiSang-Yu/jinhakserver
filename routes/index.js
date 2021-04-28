const express = require("express");
const usr = require("./usr");
const router = express.Router();

router.use("/usr", usr);

module.exports = router;