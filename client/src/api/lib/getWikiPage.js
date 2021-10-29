import { api } from "./client";

export const getWikiPage = async (title)=>{
    const { data } =  await api.get(`search/page/${title}`);
    return data;
}