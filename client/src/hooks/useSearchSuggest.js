import { useQuery } from "react-query";
import { getSuggests } from "../api";
import { useDebounce } from "./useDebounce";


export const useSearchSuggest = (searchTerm)=>{

    const debouncedSearchQuery = useDebounce(searchTerm, 600);
    const { isLoading, error, data :suggestions } = useQuery(['suggests',debouncedSearchQuery], async () =>{
        if(searchTerm.length>2){
            const {results} = await getSuggests(debouncedSearchQuery)
            return results
        }
    }
   )

   return { isLoading, error, suggestions };
}