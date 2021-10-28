const PORT = process.env.PORT || 8000;

const express = require('express');
require('dotenv').config();
const Static = require('./middlewares/static.middleware');
const SearchRoute = require('./routes/wikisearch.route');


const app = express();
app.use(express.json());
app.use(express.static('client/build'));


app.use('/api/search', SearchRoute );

app.use( Static.staticErrorHandler );
app.use('*', Static.staticHandler );


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))