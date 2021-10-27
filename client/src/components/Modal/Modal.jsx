import './Modal.css';
import logo from '../../assets/logo.png';
import logoLight from '../../assets/logo-light.png';

import { AnimatePresence ,motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { isThemeDarkAtom, modalAtom, modalContentAtom, searchTermAtom, searchTermSuggestAtom } from '../../state/atoms';
import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { backdrop, modal } from '../../animation/variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';



export const Modal = ()=>{
    const [show,setShow] = useAtom(modalAtom);
    const [modalContent] = useAtom(modalContentAtom);
    const [,setSearchTerm] = useAtom(searchTermAtom);
    const [,setSearchTermSuggest] = useAtom(searchTermSuggestAtom);
    const [theme] = useAtom(isThemeDarkAtom);
    const modalRef = useRef();
    useClickOutside(modalRef, () => setShow(false));


    const handleRelated = (hint)=>{
        setSearchTermSuggest(hint);
        setSearchTerm(hint);
        setShow(false);
    }


    return (
        <AnimatePresence exitBeforeEnter >
            {show && (
                <motion.div 
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div 
                        className="modal" 
                        ref={modalRef}
                        variants={modal}
                    >
                        <div className="close outer-shadow hover-in-shadow" onClick={()=>setShow(false)}>&times;</div>
                        <div className="modal-content">
                            <h1 className="modal-title">{modalContent.title}</h1>
                            <div className="modal-body outer-shadow">
                                <div className="modal-heading">
                                    <img 
                                            src={modalContent.thumbDetails?.source || (theme ? logo : logoLight)} 
                                            alt={modalContent?.terms?.description ? modalContent?.terms?.description[0]  : 'card pic'} 
                                    />
                                    <p className="modal-wiki-content " dangerouslySetInnerHTML={{ __html: modalContent.snippet}}></p>
                                </div>
                                { (modalContent?.terms?.alias || modalContent?.terms?.description) && (

                                    <div className="modal-related">
                                    <h3>Related</h3>
                                        <div className="modal-related-items">
                                        {modalContent?.terms?.alias && (
                                            modalContent.terms.alias.map(alias => <small className="modal-related-hints" key={alias} onClick={()=>handleRelated(alias)}>{alias}</small>)
                                        )}
                                        {modalContent?.terms?.description && (
                                            modalContent.terms.description.map(desc => <small className="modal-related-hints" key={desc} onClick={()=>handleRelated(desc)}>{desc}</small>)
                                        )}
                                        </div>
                                    </div>
                                    
                                ) }
                                
                                <a href={modalContent.sourceUrl} target="_blank" className="btn outer-shadow hover-in-shadow"><FontAwesomeIcon icon={['fab', 'wikipedia-w']} /> Insights</a>
                            </div>
                        </div>
                        
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}