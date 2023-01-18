import React, { Children, useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
export  const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1`
const AppProvider = ({ children }) => {
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError]=useState({show:'false',msg:''})
    const [quary,setQuary]=useState('titanic')
    const getMovies = async (url)=>{
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            if(data.Response === 'True'){
                setIsLoading(false)
                setMovie(data.Search)
               setIsError({show:"false",msg:""})
              
               
            }else{
                setIsError({show:'true',msg:data.Error})
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
       const timeout= setTimeout(()=>{
            getMovies(`${API_URL}&s=${quary}`);
        },800)
       return ()=>clearTimeout(timeout)
    },[quary])

    return <AppContext.Provider value={{isError,isLoading,movie,quary,setQuary}}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };