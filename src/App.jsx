import { useEffect, useState } from "react";
import "./App.css";
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
      <h3>React Country App...</h3>
    </div>
  );
}

export default App;
