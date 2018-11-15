const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
const router = express.Router();

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded());
//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//기본포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

//미들웨어에서 파라미터 확인
 
router.get('/', (req, res) => {
  res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add', (req, res) => {
  console.log('post add');
  res.json({"error" : false, "message" : "success", data : req.body.num1 + req.body.num2});
});
  
app.use('/',router);
  
  
  
  //Express 서버 시작
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express 서버를 시작했습니다. : '+ app.get('port'));
  });