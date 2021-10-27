import { api } from "./client";

export const getSuggests = async (term)=>{
    const { data } =  await api.get(`search/suggest?term=${term}`);
    return data;
}