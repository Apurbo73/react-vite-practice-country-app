import React from "react";
import "../../src/assets/style.css"
const SingleCountry = props => {
  const { name, flags, capital, population, area } = props.country;
  // console.log(flags);
  const handleRemoveButton=(name)=>{
    // alert(`${name} is selected to delete`);
    props.onRemoveCountry(name);
  }
  return (
    <div className=" shadow-lg p-3 mb-5 bg-body rounded mx-auto">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src={flags.png}
          className="card-img-top w-75 mx-auto mt-4"
          style={{ height: 150 }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title ">{name.common}</h5>
          {/* <p className="card-text">{name.official}</p> */}
          <p className="card-text">Capital: {capital}</p>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Area: {area} sq km</p>

          <a href="#" className="btn btn-outline-danger w-100" onClick={()=>{
            handleRemoveButton(name.common)}}>
            Remove Country
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
