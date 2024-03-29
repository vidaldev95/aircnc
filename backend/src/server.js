const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const app = express ();

mongoose.connect('mongodb+srv://user:swordfish95@aircnc-d9csn.mongodb.net/aircncdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//req.query = Acessar query paramas(para filtros)
//req.params = Acessar route params(para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição...)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);