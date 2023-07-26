const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('HOME!')
});

app.get('/hello', (req, res) => {
  res.send('hello edited!')
});

app.get('/envs', (req, res) => {
  res.json({
    HELLO: process.env.HELLO,
    DATABASE_URL: process.env.DATABASE_URL
  })
});

app.listen(3333, () => {
  console.log('listening at http://localhost:3333');
//   setInterval(() => console.log('ping'), 5000);
  console.log('heelo 1');
  console.log('heelo 2');
  console.log('heelo 3');
  console.log('heelo 4');
  console.warn('this is a warning');
  let bigMessage = '';
  for(let i = 0; i < 100; i++) {
    bigMessage += 'this is a big message '
  }
//   console.log(bigMessage);
});
