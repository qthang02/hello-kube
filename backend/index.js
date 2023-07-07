const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/khong-che', (req, res) => {
  res.send('day la trang khong che');
});

app.get('/co-che', ( req, res ) => {
  res.send(' day la trang co che ');
});

app.get('/javvietsub/:id', ( req, res ) => {
  const id = req.params.id;
  res.send(`day la trang jav vietsub ${id}`);
});


app.get('/javKorea/:title', ( req, res ) => {
  const title = req.params.title;
  res.send('day la trang jav korea ' + title);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});