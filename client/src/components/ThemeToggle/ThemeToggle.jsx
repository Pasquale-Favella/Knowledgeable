import './ThemeToggle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun , faMoon } from '@fortawesome/free-solid-svg-icons';
import { isThemeDarkAtom } from '../../state/atoms';
import { useAtom } from 'jotai';
import { useState } from 'react';

export const ThemeToggle = ()=>{

    const [theme,setTheme] = useAtom(isThemeDarkAtom);
    const [themeChenge , setThemeChenge] = useState(false);

    const themeHandle = ()=>{
        setTheme(prevTheme =>{
            setThemeChenge(true);
           document.body.classList.toggle('light');
           setTimeout(()=>setThemeChenge(false),350);
           return !prevTheme;
        });
    }

    return (
        <div className="style-switcher outer-shadow" >
            <div 
                className= "day-night s-icon outer-shadow hover-in-shadow"
                onClick={themeHandle}
            >
                {
                    theme  
                        ? <FontAwesomeIcon icon={faSun} className= {`sun ${themeChenge ? 'change':''}`} /> 
                        : <FontAwesomeIcon icon={faMoon} className= {`moon ${themeChenge ? 'change':''}`}/>
                }
            </div>
        </div>
    )
}