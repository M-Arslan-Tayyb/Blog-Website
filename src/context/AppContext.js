import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    
    async function fetchData(page = 1,tag=null,category) {
        let url =` ${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json(); // Fixed: add await here
            setLoading(false);
            setPages(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }
        catch (e) {
            console.log("error while fetching data", e);
            setPages(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function setPageOfBlog(page) {
        setPages(page);
        fetchData(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pages,
        setPages,
        totalPages,
        setTotalPages,
        fetchData,
        setPageOfBlog,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
