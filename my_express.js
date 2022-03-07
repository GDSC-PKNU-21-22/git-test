const express = require('./node_modules/express');
const app = express();
const port = 8000;
const fs = require('fs');
const compresstion = require('compression');

const url = require('url');
const qs = require('querystring');


const db = require('./lib/db.js');
const { response } = require('express');

app.use(express.static(__dirname))
app.use(compresstion());

app.get('/', (request, response)=> {
  response.sendFile(`${__dirname}/index/index.html`)


})

app.get('/login', (request, response) => {
  var _url = request.url;
  var queryDate = url.parse(_url, true).query;

  db.query(`SELECT * from member`, (error, member) => {
    var i;
    for(i = 0; i < member.length; i++) {
      if(member[i].user_id === queryDate.id) {
        break;
      }
    }

    if(i === member.length) {
      response.send("ID_FALSE");
    } 
    else {
      if(member[i].password === queryDate.pw) {
        response.send(JSON.stringify(member[i]));
      }   
      else {
        response.send("PW_FALSE")
      }
    }
  })
  //디비 값 불러오고 쿼리 비교 
})



app.get('/check_ID', (request, response)=> {
  var _url = request.url;
  var queryDate = url.parse(_url, true).query;

  db.query(`SELECT user_id from member`, (error, member) => {
    var i;
    for(i = 0; i <member.length; i++) {
      if(member[i].user_id === queryDate.id) {break;}
    }
    if(i != member.length) {response.send("TRUE");}
    else {response.send("FALSE");}
  })
})

app.get('/join', (request, response)=> {
  var _url = request.url;
  var qd = url.parse(_url, true).query;

  db.query(`INSERT INTO member (name, position, user_id, password) VALUE(?,?,?,?)`, [qd.name, qd.position, qd.id, qd.pw],
  (error, result)=>{
    if(error) throw error;
    response.send('회원 정보 저장 성공')
  })
  
})

app.get('/kakaoJogin', (request, response)=> {
  var _url = request.url;
  var qd = url.parse(_url, true).query;

  db.query(`SELECT * from member`, (error, member) => {
    var i;
    for(i = 0; i < member.length; i++) {
      if(member[i].user_id === qd.id && member[i].password === qd.pw) {
        break;
      }
    }

    //i === member.length 이어야지 카톡 로그인을 처음 시도한 것임(DB에 카톡 로그인 정보가 없음을 의미)
    if(i === member.length) {
      db.query(`INSERT INTO member (name, position, user_id, password) VALUE(?,?,?,?)`, [qd.name, qd.position, qd.id, qd.pw],
      (error, result)=>{
        if(error) throw error;
        db.query(`SELECT * from member where id = ${result.insertId}`,(error, result2)=> {
          response.send(JSON.stringify(result2[0]));
        })
        
      })
    } 
    else {
      response.send(JSON.stringify(member[i]));
    }
  })
})



app.listen(port, () =>{
  console.log(`Welcome at http://localhost:${port}`)
})


app.use((request, resopnse)=> {
  resopnse.status(404).send('없는 페이지를 요청하였음')
})

app.use((error, request, resopnse, next) =>{
  resopnse.status(500).send('next로 인한 에라')
})