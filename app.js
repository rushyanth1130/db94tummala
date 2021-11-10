var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nutsRouter = require('./routes/Nuts');
var addmodsRouter = require('./routes/addmods');
var selectRouter = require('./routes/selector');
var Nut = require("./models/nut");
var resourceRouter = require('./routes/resource');


// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Nut.deleteMany();
  let instance1 = new Nut({nutName :"Almond",Price:36.00,Quantity:2});
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new Nut({ nutName:"Hazelnut",Price:64.00,Quantity:3});
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new Nut({ nutName:"Pistachio",Price:75.00,Quantity:5});
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = false;
if (reseed) { recreateDB(); }


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Nuts', nutsRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded");
});

module.exports = app;
