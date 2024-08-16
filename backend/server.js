const express = require('express');
require('dotenv').config();
const cards = require('../queAns.json');

const app = express();
const PORT = process.env.VITE_PORT;

app.get('/', (req, res) => {
    res.send('You are up!!');
});
app.get('/api/cards', (req, res) => {
    try {
        console.log('all data sent');
        res.setHeader('MY-Name', "Satyajit Patel");
        return res.status(200).json({msg: cards});
    } catch(err) {
        console.log('all data sent err\n', err.message);
        return res.status(500).json({msg: "all data sent err"});
    }
});
app.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);
});