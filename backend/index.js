const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('*', (req, resp) => {
  const file = path.join(__dirname,'/../dist/index.html');
  debugger;
  resp.sendFile(file);
});

app.listen(8080);