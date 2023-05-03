const express = require('express')
const app = express()
const indexRouter = require('./routes')
const path = require('path');
const { sequelize } = require("./models");
const mysql = require("mysql2");

app.set("port", process.env.PORT | 3000)

app.set('view engine', 'ejs');

sequelize.sync({force: false})
    .then(()=>{
        console.log("데이터베이스 연결 선공");
    })
    .catch((err)=>{
        console.error(err);
    })
app.set('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter)


app.use((req, res, next)=>{
    res.status(404).send("Not found");
})

app.listen(app.get("port"), ()=>{
    console.log(app.get("port"), "번 포트 실행 중");
})