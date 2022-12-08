const express = require("express");
const app = express();
const PORT = 8080;
// index파일이면 routes/ 까지만 작성, 라우터 연결
const todoRouter = require('./routes/todo')

// body-parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', todoRouter) // 기본 주소: localhost:PORT/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
