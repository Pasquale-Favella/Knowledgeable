import './SearchBar.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { searchTermAtom, searchTermSuggestAtom } from '../../state/atoms';

export const SearchBar = ()=>{

    let history = useHistory();
    const [searchTerm,setSearchTerm] = useState('');
    const [,searchEmitter] = useAtom(searchTermAtom);
    const [,searchSuggestEmitter] = useAtom(searchTermSuggestAtom);

    const handleSubmit = (e)=>{
        e.preventDefault();
        searchSuggestEmitter(searchTerm);
        searchEmitter(searchTerm);
        history.push(`/search/${searchTerm}`);
        setSearchTerm('');
    }

    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
    }

    return (
        <div className="searchbox__container">
            <form className="searchbox__content outer-shadow hover-in-shadow" onSubmit={handleSubmit} autoComplete="off">
                
                <input 
                    className="searchbox__text" 
                    type="text" 
                    name="search" 
                    placeholder="Search..."
                    onChange={handleChange}
                    value={searchTerm}
                    />
            
                <button className="searchbox__btn outer-shadow hover-in-shadow" type="submit" disabled={!searchTerm}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}