const express = require('express');
const route = express.Router();
const WikiController = require('../controller/wikisearch.controller');

route
    .get('/', WikiController.search)
    .get('/suggest', WikiController.searchSuggestions)


module.exports = route;