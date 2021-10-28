const cacheable = require('apicache');
const CacheTime = require('../constants/cache.constants');


module.exports = {
    cacheFor : ( duration = CacheTime.HOUR )=> cacheable.middleware(duration) ,
    index : ()=> cacheable.getIndex() ,
    evict : ( key ) => cacheable.clear(key)
}