const express = require('express');
const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

app.post('/user/:id', (req, res)=> {
    console.log(req.body);
    console.log(req.params)
    res.send('POST REQUEST RECEIVED');
});

app.put('/contact', (req, res)=> {
    res.send('UPDATE REQUEST RECEIVED');
});

app.delete('/test', (req, res )=> {
    res.send('<h1>DELETE REQUEST RECEIVED</h1>');
});

app.listen(5000, () => {
    console.log('server on port 5000');
});