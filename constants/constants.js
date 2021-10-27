const WIKI_API_SUGGEST_URL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";
const WIKI_API_DETAILS_URL ="https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=";
const WIKI_API_THUMB_URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles=";

const WIKI_API_SUGGEST_KEY = 1;

const WIKI_API_SUGGEST_URLS = 3;


module.exports = {
    WIKI_API_SUGGEST_URL,
    WIKI_API_SUGGEST_KEY,
    WIKI_API_SUGGEST_URLS,
    WIKI_API_DETAILS_URL,
    WIKI_API_THUMB_URL
}
