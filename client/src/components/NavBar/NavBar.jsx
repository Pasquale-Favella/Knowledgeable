import './NavBar.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    return (
        <header className="header">
            
                    <div className="logo">
                        <Link to="/">K</Link>
                    </div>
                    <div className="header__search">
                        <SearchBar/>
                    </div>
                    <div>
                        <ThemeToggle/>
                    </div>
                
        </header>


    )
}