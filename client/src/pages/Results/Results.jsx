import './Results.css';

import { SearchResultList } from '../../components/SearchResultList/SearchResultList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { motion } from 'framer-motion';
import { resultPageVariant } from '../../animation/variants';
import { resultPageTransition } from '../../animation/transitions';
import { searchTermAtom } from '../../state/atoms';
import { useAtom } from 'jotai';


export const Results = ()=>{

    const [searchTerm] = useAtom(searchTermAtom);
    

    return (
        
          <motion.section className="results-section section" 
            variants={resultPageVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={resultPageTransition}
          >
            <div className="container">
              
              <div className="section-title">
                <h2 data-heading={decodeURIComponent(searchTerm)}>Results</h2>
              </div>
              
              <div className="row">
                <div className="results-filter">
                  <SearchForm/>
                </div>
              </div>
              <SearchResultList />
            </div>
          </motion.section>
    )
}