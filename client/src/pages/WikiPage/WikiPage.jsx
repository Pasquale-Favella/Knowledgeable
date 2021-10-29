import './WikiPage.css';

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useWikiPage } from "../../hooks/useWikiPage";
import { pageVariant } from '../../animation/variants';
import { pageTransition } from '../../animation/transitions';
import { modalAtom } from '../../state/atoms';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const WikiPage = ()=> {

    let { title } = useParams();
    const [,setShow] = useAtom(modalAtom);
    const { isLoading, error, pageData } = useWikiPage(title);

    useEffect(()=>{
        setShow(false);
    },[])
    

    return (
        <motion.section 
            className="wiki-page-section section"
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={pageTransition}
        >
            <div className="wiki-page-container outer-shadow" >
                {isLoading && <div className="wiki-page-loader" ><FontAwesomeIcon icon={faSpinner} pulse size={'10x'}/></div>}
                {pageData && (
                    
                        <div dangerouslySetInnerHTML={{ __html: pageData.html}}></div>
                    
                )}
            </div>

        </motion.section>
    )
}