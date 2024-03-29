const path = require('path');

const PORT = process.env.PORT || 8089;

const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const errorController = require("./controllers/error");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use(errorController.get404);

app.listen(PORT);


