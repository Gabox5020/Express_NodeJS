const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res)=> {
    res.send('About me');
});

app.get('/contact', (req, res)=> {
    res.send('Form contact');
});

app.listen(3000, () => {
    console.log('server on port 3000');
});
