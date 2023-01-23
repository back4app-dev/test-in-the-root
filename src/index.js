const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('hello, world 3000 in the src directory!')
});

app.use('/hello', (req, res) => {
  res.send('hello!')
});

app.listen(3333, () => {
  console.log('listening at http://localhost:3333');
  setInterval(() => console.log('ping'), 5000);
  console.warn('this is a warning');
  let bigMessage = '';
  for(let i = 0; i < 100; i++) {
    bigMessage += 'this is a big message '
  }
  console.log(bigMessage);
});
