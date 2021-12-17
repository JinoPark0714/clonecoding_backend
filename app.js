const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
const indexRouter = require('./route/index');

app.use(cors());
app.use(morgan('dev'));
app.use('/', indexRouter);

app.listen(PORT, ()=>{
  console.log(`start server : ${PORT}`);
});