import { useQuery } from "react-query";
import { getDetails } from "../api";


export const useSearch = (searchTerm)=>{

    const { isLoading, error, data :searchResults } = useQuery(
        ['search',searchTerm], 
        async () =>{
            const { results } = await getDetails(searchTerm);
            return results;
        }
    );

   return { isLoading, error, searchResults };
}