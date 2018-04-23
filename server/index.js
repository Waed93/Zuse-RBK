var express = require('express');
var bodyParser = require('body-parser');
var user = require('../database-mongo');
var session = require('express-session');
var app = express();
var cookieParser = require('cookie-parser');
 var handler=require('./request-handler.js');
 var mongoose=require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));
// app.post('/user', function (req, res) {
//  //console.log(req.body['states[userName]'])
//  user.User.findOne({userName:req.body['states[userName]']},function(err,found){
   
//    if (!found || found["passWord"]== req.body['states[passWord]']){
//      var obj = new user.User({
//           userName: req.body['states[userName]'],
//           passWord: req.body['states[passWord]']
//        });
//        obj.save(function(err,obj) {
//          if(err){
//             res.status(500).send(err);
//          }
//          else{res.status(201).send("Thank You");}
//        })
//    }
//    else{res.status(201).send("Incorrect password or taken userName")}
//  })
              
 
// })

// app.get('/user', function (req, res) {
//  //console.log("here")
//  user.selectAll(function(err, data) {
//    //console.log(data)
//    if(err) {
//     // console.log("sth")
//      res.sendStatus(500);
//    } else {
//        var arr=[];
//        for (var i=0;i<data.length;i++){
//         arr.push({userName:data[i]["userName"]})
//        }
//        arr.sort(function(a, b) {
//          var nameA = a.userName.toUpperCase();
//          var nameB = b.userName.toUpperCase();
//          if (nameA < nameB) {
//          return -1;
//          }
//          if (nameA > nameB) {
//          return 1;
//          }
//          return 0;
//          });
     
//      res.send(arr);
//    }
//  });
// });
 // app.get('/Signup', handler.signupUserForm);
app.post('/Signup', handler.signupUser);
app.post('/Profile', handler.Profilesave);
app.post('/Suggest', handler.addSuggest);
app.post('/items', handler.showSuggest);
 // app.get('/Login', handler.signinUserForm);
app.post('/Login', handler.signinUser);

app.get('/', function (req, res) {
   res.send("");
 })






app.listen(3000, function() {
 console.log('listening on port 3000!');
});