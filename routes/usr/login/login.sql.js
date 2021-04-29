const login = [
  `
  SELECT 'X'
  FROM MEMBER 
  WHERE 1=1
  AND memId = ? AND memPwd = ?
  `
];

module.exports = {
  login
}