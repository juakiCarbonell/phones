const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");

// settings
app.set('port', 8000)
app.set('json spaces', 2)

//midelwares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors());

// routes
app.use(require('./routes/phones'))

//starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})