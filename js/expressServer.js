let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(__dirname));

app.listen((process.env.PORT || 8000), () => {
  console.log("Listening on port 8000");
});
