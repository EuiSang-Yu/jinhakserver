const DB = require("../../../../dbhelper.js");

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

// 로그인
const login = async (req, res) => {
  var { memId, memPwd } = await req.body;
  console.log("req.body: " + JSON.stringify(req.body));

  DB(
    "POST",
    `SELECT memId, memPwd FROM MEMBER WHERE memId = ${memId} AND memPwd = ${memPwd}`,
    []
  ).then((res) => {
    console.log("DB성공 : " + res);
    return res.status(200).json({ res });
  });
};

module.exports = {
  login
};
