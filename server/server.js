const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const plants = require('./module/routes/plants');


// Body parser is a module that helps us by
// turning our response body into an Object.
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })); // <- req.body will not work without this!
app.use('/plant', plants);
//spin up server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});