const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send(
      `<h1>This is awesome!</h1>`  
    );
})

app.listen(7777);

console.info('Server listening.');