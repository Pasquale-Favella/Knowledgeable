const WikiService = require('../service/wikisearch.service');

const search = async (req,res)=>{

    try {

        const { term } = req.query; 
        const results = await WikiService.search(term);
        
        return res.json(results);

    } catch (error) {
        return res.status(500).json({error:true,msg:error.message})
    }
   
}

const searchSuggestions = async (req,res)=>{

    try {
        const { term } = req.query;

        const results = await WikiService.searchSuggest(term);
        
        return res.json(results);

    } catch (error) {
        return res.status(500).json({error:true,msg:error.message})
    }
    
}

const getWikiPage = async (req,res)=>{
    try {
        const { title } = req.params;

        const results = await WikiService.getPageHtmlByTitle(title);
        
        return res.json(results);

    } catch (error) {
        return res.status(500).json({error:true,msg:error.message})
    }
}


module.exports = {
    search,
    searchSuggestions,
    getWikiPage
};