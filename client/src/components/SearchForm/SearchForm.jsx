import './SearchForm.css';

import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useSearchSuggest } from '../../hooks/useSearchSuggest';
import { useClickOutside } from '../../hooks/useClickOutside';
import { searchTermAtom, searchTermSuggestAtom } from '../../state/atoms';
import { useAtom } from 'jotai';

export const SearchForm = ()=>{

    const [,setSearchTerm] = useAtom(searchTermAtom);
    const [searchTermSuggest,setSearchTermSuggest] = useAtom(searchTermSuggestAtom);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const searchFormRef = useRef();
    useClickOutside(searchFormRef, () => setShowSuggestions(false));

   const { isLoading, suggestions } = useSearchSuggest(searchTermSuggest);

    let history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowSuggestions(false);
        setSearchTerm(searchTermSuggest);
        history.push(`/search/${encodeURIComponent(searchTermSuggest)}`);
    }

    const handleChange = (e)=>{
        setSearchTermSuggest(e.target.value);
    }


    const handleClickSuggest = (suggest)=>{  
        setShowSuggestions(false)
        setSearchTermSuggest(suggest);
        setSearchTerm(suggest); 
        history.push(`/search/${suggest}`);
    }


    return (
        <form className="searchform" onSubmit={handleSubmit}>
            
            <div className={`input-group outer-shadow ${suggestions ? "" : "hover-in-shadow"}`} ref={searchFormRef}>
                <input 
                    className="input-control" 
                    type="text" 
                    placeholder="Search for content" 
                    onChange={handleChange}
                    value={searchTermSuggest}
                    onClick={()=>setShowSuggestions(true)}
                />
           
                <button className="searchform__btn" disabled={!searchTermSuggest}>
                   {isLoading ? <FontAwesomeIcon icon={faSpinner} pulse /> : <FontAwesomeIcon icon={faSearch}/>}  
                </button>
                {suggestions && showSuggestions &&(
                    <ul className="searchform__suggests">           
                        {suggestions.map((suggest,i)=>(<li key={i} onClick={()=>handleClickSuggest(suggest.searchSuggestion)}>{suggest.searchSuggestion}</li>))}
                    </ul>
                )}
            </div>
            
        </form>
    )
}