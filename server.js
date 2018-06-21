// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require the use of mongoose
require('./server/config/mongoose');
// Require body-parser(to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our app
app.use(bodyParser.json());
// require path
var path = require('path');
// Setting static Folder Directory
app.use(express.static(path.join(__dirname, './public/dist/public/')));
// Setting our Views folder directory
app.set('views', path.join(__dirname, './views'));
// Setting up View Engine to EJS
app.set('view engine', 'ejs');
// set up Express session to track user login
const session = require('express-session');
app.set('trust proxy', 1) //trust first proxy
app.use(session({
    secret:'ultimatesmash',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}));
require('./server/config/routes.js')(app);
// Set server to listen on Port 8000
app.listen(8000, function(){
    console.log("listening on port 8000")
});