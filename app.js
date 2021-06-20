const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'views');
app.use(express.static('public'));
app.listen(port,() => console.log("funciona en3030"));
app.get('/', (req,res) => res.sendFile(path.join(views,'home.html')))