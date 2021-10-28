const axios = require('axios');
const Constants = require('../constants/constants');

const search = async ( term )=>{

    try {
        const {
            data :{
                query :{ search },
            }
        } = await axios.get(`${Constants.WIKI_API_DETAILS_URL}${term}`);
        
        const searches = await searchThumbnails(search);

        return { searchTerm : term , results : searches };

    } catch (error) {
        throw new Error(error);
    }

    
}

const searchThumbnails= async (searches)=>{
    return await Promise.all(
        searches.map(async (search)=>{

            try {
                const { data :{ query : {pages}}} =  await axios.get(`${Constants.WIKI_API_THUMB_URL}${encodeURIComponent(search.title)}`);

                const {thumbnail  , terms :{ alias , description}} = pages[0];
                
                return {...search , thumbDetails : { ...thumbnail } , terms :{ alias , description} , source: "Wiki" ,sourceUrl : `https://en.wikipedia.org/wiki?curid=${search.pageid}`};

            } catch (error) {
                return {...search , thumbDetails : {} , terms :{} , source: "Wiki"};
            }
        
    }));
}

const searchSuggest = async (term)=>{

    try {

        const { data } = await axios.get(`${Constants.WIKI_API_SUGGEST_URL}${term}`);

        const searchSuggestions = data[ Constants.WIKI_API_SUGGEST_KEY ];
        const suggestionUrls = data[ Constants.WIKI_API_SUGGEST_URLS ];
    
        const formattedResponse = searchSuggestions.map( 
         (suggestion,idx)=> ({searchSuggestion:suggestion , wikiUrl : suggestionUrls[idx]})
        );
    
        return {searchTerm : term , results : formattedResponse};

    } catch (error) {
        throw new Error(error);
    }
   
}

module.exports = {
    search,
    searchSuggest
}