import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import App from '../src/app';

const PORT = 3000;

const app = express();
const text = renderToString(<App />);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div id="root">${text}</div>
    <script src="bundle.js"></script>
  </body>
</html>
  `)
})

app.listen(PORT, () => {
  console.log(`listen: ${PORT}`)
})

