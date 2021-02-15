const express = require("express");
const router = express.Router();
const db = require("../../db");

router.get("/selectAll", async (req, res) => {
  let pool = null;
  try {
    pool = await db();
    const request = pool.request();
    console.log("request: " + request);
    const result = request.query("SELECT * FROM USR");
    res.json(result.recordset);
    console.log("result : " + result);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
