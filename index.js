const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./config/routes');
const app =  express();

app.use(cors());
require('./config/express')(app);
require('./config/mongoose');
app.get('/', (req, res) => {
    res.send('Hello world');
});
require('./config/routes')(app);
app.use(routes);


app.listen(config.PORT, console.log.bind(console, `Server listening on port ${config.PORT}...`));