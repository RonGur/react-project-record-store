const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
const cookieParser = require('cookie-parser');
const cors = require('cors');



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.use('/api', apiRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));