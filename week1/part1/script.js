const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test', (req, res) => {
    console.log("/test", req);
    const cat = {
        name: "Garfield",
        age: 7,
        weight: 50
    };
    res.json(cat);
});

app.listen(port, () => console.log(`On port ${port}!`))