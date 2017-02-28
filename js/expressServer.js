let express = require('express');
let app = express();
let path = require('path');
let trailPath = path.join(__dirname, 'html/index.html');

app.use('/html/index.html', express.static('.'));//, { index; 'index.html' })
// app.use(express.static('html/index.html'));

// app.get(trailPath, 'utf8', () => {
//
// });

app.listen((process.env.PORT || 8000), () => {
  console.log("Listening on port 8000");
});
