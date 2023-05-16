import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
const PORT = 6000;

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './dist', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    let result = data.replace(/\$OG_TITLE/g, 'Home Page');
    result = result.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = result.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/about-us', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, './dist', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'About Page');
    result = result.replace(/\$OG_DESCRIPTION/g, "About page description");
    result = result.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/rewards', function(request, response) {
  console.log('Rewards');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/\$OG_TITLE/g, 'Contact Page');
    result = result.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    result = result.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './dist', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app