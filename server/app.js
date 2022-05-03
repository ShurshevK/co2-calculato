var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');


// Create global app object
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/emissions', async (req, res) => {
  console.log('/emissions', req.body)
  res.json({});
})

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
});

// finally, let's start our server...
var server = app.listen(process.env.PORT || 5000, function(){
  console.log('Listening on port ' + server.address().port);
});
