const express = require("express");
const router = express.Router();
const usr = require("./usr");
const mgr = require("./mgr");

router.use("/usr", usr);
router.use("/mgr", mgr);
// router.get("/mgr", (req, res) => {
//   console.log("서버 데이터 반환 성공");
//   res.send({ title: "라우트 시작점 값" });
// });

module.exports = router;
