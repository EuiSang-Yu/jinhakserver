const express = require("express");
const usr = require("./usr");
const mgr = require("./mgr");
const router = express.Router();

router.use("/usr", usr);
router.use("/mgr", mgr);

module.exports = router;
