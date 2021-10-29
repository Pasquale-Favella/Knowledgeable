import './SearchResultCard.css';
import logo from '../../assets/logo.png';
import logoLight from '../../assets/logo-light.png';
import { useAtom } from 'jotai';
import { isThemeDarkAtom, modalAtom, modalContentAtom } from '../../state/atoms';
export const SearchResultCard = ({item,isLoading=false})=>{

    const [theme] = useAtom(isThemeDarkAtom);
    const [,setShow] = useAtom(modalAtom);
    const [,setModalContent] = useAtom(modalContentAtom);

    const handleDetailsClick = ()=>{
        setModalContent(item);
        setShow(true);
    }

    return(
        <div className="result-card">
            <div className="result-card-body outer-shadow">
                <div className="result-card-img">
                    {
                        isLoading 
                        ? <div className="loading-image outer-shadow"></div>
                        : (
                            <div  onClick={handleDetailsClick}>
                                <img 
                                    src={item.thumbDetails?.source || (theme ? logo : logoLight)} 
                                    alt={item?.terms?.description ? item?.terms?.description[0]  : 'card pic'} 
                                />
                                <span className="view-details">See the details</span>
                            </div>
                        )
                    }
                    
                </div>
                {
                    isLoading ? <p className="loading-title outer-shadow"></p>
                    : <p className="result-card-title" onClick={handleDetailsClick}>{item.title}</p>
                }
                
            </div>
        </div>
    )
}