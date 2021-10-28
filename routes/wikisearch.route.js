const express = require('express');
const route = express.Router();
const WikiController = require('../controller/wikisearch.controller');
const Cache = require('../middlewares/cache.middleware');
const CacheTime = require('../constants/cache.constants');

route
    .get('/', Cache.cacheFor(CacheTime.HOUR) , WikiController.search)
    .get('/suggest', Cache.cacheFor(CacheTime.HALF_HOUR) ,WikiController.searchSuggestions)
    .get('/cache',(ctx)=>ctx.res.json(Cache.index()))


module.exports = route;