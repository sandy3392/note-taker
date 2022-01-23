const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//routing paths
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//express server to get the files from public to be used across and convert the files to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// html and api routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//listening on express server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});