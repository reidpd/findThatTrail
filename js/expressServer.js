let express = require('express');
let app = express();
let path = require('path');
let trailPath = path.join(__dirname, 'html/index.html');

app.use(trailPath, express.static('.'));

app.listen((process.env.PORT || 8000), () => {
  console.log("Listening on port 8000");
});
