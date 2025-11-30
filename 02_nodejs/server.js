const express = require('express');
const app = express();

app.listen(8080, function () {
  console.log('Listening 8080 ...');
});

app.get('/book', function (req, res) {
  res.send('This is a book list');
});

// app.get('/', function (req, res) {
//   res.send(
//     '<html>\
//     <body>\
//     <h1>This is home.</h1>\
//     <marquee>Hello User.</marquee>\
//     </body>\
//     </html>'
//   );
// });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
