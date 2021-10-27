import { api } from "./client";

export const getDetails = async (term)=>{
    const {data} =  await api.get(`search?term=${term}`);
    return data;
}