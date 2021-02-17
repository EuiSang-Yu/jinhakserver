const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const db = require("../../db");
const bodyParser = require("body-parser");
const { TYPES } = require("mssql");

router.use(bodyParser.urlencoded({ extended: false }));

// READ
router.get("/selectAdmin", async (req, res) => {
  let pool = null;
  try {
    pool = await db(); // await 는 비동기인 js에서 promise 값이 사용가능해질때까지 실행을 중지시킴
    let result = await pool
      .request()
      .query("SELECT * FROM USR WHERE USR_TYPE = 0");
    // recordset : 쿼리결과
    res.json(result.recordset); // json 타입으로 파싱해서 send()
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
