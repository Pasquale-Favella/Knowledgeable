import './NotFound.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { pageVariant } from '../../animation/variants';
import { pageTransition } from '../../animation/transitions';

export const NotFound = ()=>{

    return (
        <motion.section className="notfound-section section" 
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={pageTransition}
        >
            
            <div className="container">
                <div className="row full-screen align-items-center">
                    <h1 className="notfound-text-404">404</h1>
                    <h3 className="notfound-text">Not found</h3>
                    <Link className="btn outer-shadow hover-in-shadow" to="/" >Go Back</Link>
                </div>
            </div>
        </motion.section>
    )
}