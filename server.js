// get dependencies
var cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.set('view engine', 'eje');
app.use(express.static('./public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Configuring the database
const config = require('./configurations/config.js');

require('./routes/allroutes.routes')(app);
//require('./routes/product.routes')(app);

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Arrived API App..."});
});
//app.use("/user", user);
// listen on port 3000

app.listen(config.serverport, () => {
    console.log("Server is listening on port : "+config.serverport);
});