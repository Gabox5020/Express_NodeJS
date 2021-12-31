const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(express.json());
app.use(morgan('dev'));

// app.all('/user', (req, res, next) => {
//     console.log('Por aqui paso');
//     next();
// });

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

app.put('/user/id', (req, res)=> {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res ) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static('public'));

app.listen(5000, () => {
    console.log('server on port 5000');
});