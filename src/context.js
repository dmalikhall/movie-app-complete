import React, { useContext, useEffect, useState } from "react";

export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_APP_KEY}`;


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({show: false, msg:''})
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('spider-man');

    const fetchMovies = async (url) => {
        setIsLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if(data.Response === 'True'){
                setMovies(data.Search)
                setError({show: false, msg:''})
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}&s=${query}`)

    },[query])
    return (
        <AppContext.Provider value={{isLoading, error, movies, query, setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }