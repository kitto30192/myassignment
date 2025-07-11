// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// app.get('/api/:date', (req, res) => {
//   const input = req.params.date;

//   // Check if the input is a number (timestamp in ms)
//   const isTimestamp = /^\d+$/.test(input);
//   const date = isTimestamp ? new Date(Number(input)) : new Date(input);

//   // Validate date
//   if (date.toString() === 'Invalid Date') {
//     return res.status(400).send({ error: 'Invalid Date' });
//   }

//   res.send({
//     unix: date.getTime(),
//     utc: date.toUTCString()
//   });
// })

// app.get('/api/', (req, res) => {
  

//   // Validate date
//   const date = new Date() ;

//   res.send({
//     unix: date.getTime(),
//     utc: date.toUTCString()
//   });
// })

app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(
      {ipaddress:ip,language:"en-US,en;q=0.5",software:"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0"}
  );
});







// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
