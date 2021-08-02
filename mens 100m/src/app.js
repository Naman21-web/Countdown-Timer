const express = require('express');
require("../src/db/conn");
const MensRanking = require('../src/models/mens');

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT ||3000;

app.listen(port, () =>{
    console.log(`connection is live at port ${port}`);
});