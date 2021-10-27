import './SearchResultList.css';

import { useAtom } from "jotai";
import { Redirect} from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { searchTermAtom } from "../../state/atoms";
import { SearchResultCard } from "../SearchResultCard/SearchResultCard";

export const SearchResultList =()=>{
    
    const [searchTerm] = useAtom(searchTermAtom);
    const { isLoading, error, searchResults } = useSearch(searchTerm);

    if(!searchTerm) return (
        <Redirect to="/" />
    )


    return (
        <div className="row results-items">
            {error && !isLoading && <h1 className="results-error">error occurred</h1>}
            { isLoading && [...Array(10).keys()].map(el=><SearchResultCard key={el} isLoading/>)}
            {searchResults && searchResults.map( (item,i)=><SearchResultCard key={i} item={item}/>)}
            {!error && !isLoading && searchResults && searchResults.length === 0 && <h1 className="results-notfound">No results found</h1>}
        </div>
    )
}