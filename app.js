
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
const bodyParser = require('body-parser');

// var index = require('./routes/login');
var home = require('./routes/home');
var profile = require('./routes/profile');
var add = require('./routes/add');
var account = require('./routes/account');
var login = require('./routes/login');
var signUp = require('./routes/signUp');
var manage = require('./routes/manage');
var studyGroups = require('./routes/studyGroups');
var favoriteLocs = require('./routes/favoriteLocs');

var addFavorites = require('./routes/addFavorites');
// Example route
// var user = require('./routes/user');

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

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs')


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/home', home.view);
app.get('/profile', profile.view);
app.get('/add', add.view);
app.get('/account', account.view);
app.get('/manage', manage.view);
app.get('/signUp', signUp.view);
app.get('/studyGroups', studyGroups.view);
app.get('/favoriteLocs', favoriteLocs.view);

app.get('/addFavorite', add.addFavorite);
// app.get('/login', login.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
