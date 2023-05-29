import React from "react";
import SingleCountry from "./SingleCountry";
import { v4 as uuidv4 } from "uuid";

const Countries = props => {
  return (
    <div className="d-flex flex-wrap container ">
     {props.countries.map((country)=>{
        const countryNew={country, id:uuidv4()}
        return <SingleCountry {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}></SingleCountry>
     })}
    </div>
  );
};

export default Countries;
