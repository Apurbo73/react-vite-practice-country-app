import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Countries from "./components/Countries";
const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const fetchData = async url => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div>
      <h3 className="text-center mt-5 mb-3">React Country App...</h3>
      {isLoading && <h3>Loading.....</h3>}
      {error &&
        <h3>
          {error.message}
        </h3>}
      {countries && <Countries countries={countries}></Countries>}

    </div>
  );
}

export default App;
