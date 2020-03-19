const express = require('express')
const path = require('path');
const app = express()
const port = 3000
console.log("server-two");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {name: "Rob", age: "Age: 3", weight: "Weight: 4 kg"})
})

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