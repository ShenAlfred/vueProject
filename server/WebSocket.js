var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
app.get('/home', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  console.log("a user connected");

  socket.on('login', function(user) {
    console.log("用户:"+user.userName+"已登录!!!")
  });

  socket.on('exit', function(user){
    console.log("用户:"+user.userName+"已退出!!!");
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
