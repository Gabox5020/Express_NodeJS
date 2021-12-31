const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(logger);

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

app.listen(5000, () => {
    console.log('server on port 5000');
});