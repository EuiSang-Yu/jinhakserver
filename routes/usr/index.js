const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const db = require("../../db");
const bodyParser = require("body-parser");
const { TYPES } = require("mssql");

/*
  req.body : POST 정보를 가집니다. 파싱을 위해서 body-parser와 같은 패키지가 필요합니다. 
            요청 정보가 url에 들어있는 것이 아니라 Request의 본문에 들어있기 때문입니다. 
  req.query : GET 정보를 가집니다. 즉, url로 전송된 쿼리 스트링 파라미터를 담고 있습니다.
  req.params : 내가 이름 붙인 라우트 파라미터 정보를 가집니다.
  req.headers : HTTP의 Header 정보를 가집니다.

  이 외에도 req.route, req.cookies, req.acceptedLanguages, 
  req.url, req.protocol, req.host, req.ip 등이 있음. 

  ---------------------------------------------------------------------------------
  
  res.send : 다양한 유형의 응답을 전송합니다.
  res.redirect : 브라우저를 리다이렉트 합니다. 
  res.render : 설정된 템플릿 엔진을 사용해서 views를 렌더링합니다.
  res.json : JSON 응답을 전송합니다.
  res.end : 응답 프로세스를 종료합니다.

  이 외에도 res.set, res.status, res.type, res.sendFile, 
  res.links, res.cookie 등이 있음. 
*/
router.use(bodyParser.urlencoded({ extended: false }));

// READ
router.get("/selectUser", async (req, res) => {
  let pool = null;
  try {
    pool = await db(); // await 는 비동기인 js에서 promise 값이 사용가능해질때까지 실행을 중지시킴
    let result = await pool
      .request()
      .query("SELECT * FROM USR WHERE USR_TYPE = 2");
    // recordset : 쿼리결과
    res.json(result.recordset); // json 타입으로 파싱해서 send()
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
