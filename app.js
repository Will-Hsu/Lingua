
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
var chatroom = require('./routes/chatroom');
var help = require('./routes/help');
var profile = require('./routes/profile');
var chat = require('./routes/chat');
var lesson = require('./routes/lesson');
var login = require('./routes/login');
var add = require('./routes/add');
var user = require('./routes/user');
var proficiency = require('./routes/proficiency');
var done = require('./routes/done');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', index.view);
// Example route
app.get('/chatroom', chatroom.view);
app.get('/help', help.view);
app.get('/profile', profile.view);
app.get('/lesson/:name', lesson.view);
app.get('/chat/:name', chat.view);
app.get('/', login.view);
app.get('/add', add.sendMessage);
app.get('/proficiency', proficiency.view);
app.get('/done/:name', done.view);
app.post('/user', user.addUser);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
