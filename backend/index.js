const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/Infoblatt%20Teilnehmer%20DM19.pdf', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../dist/res/pdf/Infoblatt Teilnehmer DM19.pdf')
  );
});

app.get('*', (req, resp) => {
  const file = path.join(__dirname, '/../dist/index.html');
  resp.sendFile(file);
});

app.listen(8888);
