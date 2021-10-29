import { useQuery } from "react-query";
import { getWikiPage } from "../api";


export const useWikiPage = (title)=>{

    const { isLoading, error, data :pageData } = useQuery(
        ['page',title], 
        ()=>getWikiPage(title)
    )

   return { isLoading, error, pageData };
}