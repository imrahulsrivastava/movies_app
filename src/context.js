import { createContext, useState, useEffect } from "react";
export const ApiUrl = `http://www.omdbapi.com/?apikey=67f516ac`;
const appContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState({ show: "false", msg:"" });
  const [searchQuery, setSearchQuery] = useState("");

  
  const getMovies = async (ApiUrl) => {
    setIsLoading(true);
    try {
      

      const res = await fetch(ApiUrl);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
       
        setIsLoading(false);
        setShowError({ show: false, msg: "" });
        setMovies(data.Search);
        
      } else {
        setShowError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let clearOutTimer = setTimeout(() => {
      getMovies(`${ApiUrl}&s=${searchQuery}`);
    }, 800);
    return () => clearTimeout(clearOutTimer)
    

    
  }, [searchQuery]); // Re-run when searchQuery changes

  return (
    <appContext.Provider
      value={{ movies, isLoading, showError, searchQuery, setSearchQuery }}
    >
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
