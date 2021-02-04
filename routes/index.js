const express = require("express");
const router = express.Router();

const users = [
  { name: "홍길동", age: "25" },
  { name: "고길동", age: "35" },
  { name: "박길동", age: "45" }
];

// router.get("/", (req, res) => {
//   console.log("http://localhost:3001/api/");
//   res.send({ title: "프론트로 데이터 넘기기성공!" });
// });

router.get("/", (req, res) => {
  console.log("http://localhost:3001/api/");
  res.send(users);
});

module.exports = router;
