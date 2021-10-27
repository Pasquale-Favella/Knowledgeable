import './Home.css';
import logo from '../../assets/logo.png';
import logoLight from '../../assets/logo-light.png';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useAtom } from 'jotai';
import { isThemeDarkAtom } from '../../state/atoms';
import { motion } from "framer-motion";
import { pageTransition } from '../../animation/transitions';
import { pageVariant } from '../../animation/variants';

export const Home = ()=>{

    const [theme] = useAtom(isThemeDarkAtom);

    return (
        <motion.section className="home-section section" 
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={pageTransition}
        >
  
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className="home-text">
                        <p>Powered thanks to Wikipedia</p>
                        <h2>knowledgeable</h2>
                        <h1>Find everithing you need</h1>
                        <SearchForm/>
                    </div>
                    <div className="home-img">
                        <div className="img-box inner-shadow">
                            <img src={theme ? logo : logoLight} className="outer-shadow" alt="logo-pic" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}