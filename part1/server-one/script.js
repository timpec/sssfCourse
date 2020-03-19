const express = require('express')
const app = express()
const port = 3000
console.log("server-two");

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/catinfo', (req, res) => {
    //console.log("/catinfo", req);
    const cat = {
        name: "Robert",
        age: 3,
        weight: 50
    };
    res.json(cat);
});

app.listen(port, () => console.log(`On port ${port}!`))