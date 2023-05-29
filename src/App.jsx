import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Countries from "./components/Countries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async url => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
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
  //handle Remove Country:
  const handleRemoveCountry = name => {
    const filter = filteredCountries.filter(
      country => country.name.common !== name
    );
    setFilteredCountries(filter);
    toast(`${name} is deleted`);
  };

  // handle search:
  const handleChange = e => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  useEffect(
    () => {
      const text = searchText.toLowerCase();
      const searchedCountries = countries.filter(country => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(text);
      });
      setFilteredCountries(searchedCountries);
    },
    [searchText]
  );
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <h6> React Country App</h6>
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                value={searchText}
                onChange={handleChange}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <h3 className="text-center mt-5 mb-3">React Country App...</h3>
      {isLoading && <h3>Loading.....</h3>}
      {error &&
        <h3>
          {error.message}
        </h3>}
      {countries &&
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />}
      <ToastContainer />
    </div>
  );
}

export default App;
