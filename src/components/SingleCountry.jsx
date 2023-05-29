import React from "react";
const SingleCountry = props => {
  const { name, flags } = props.country;
  console.log(flags);
  return (
    <div className=" shadow-lg p-3 mb-5 bg-body rounded ">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={flags.png}
          className="card-img-top "
          style={{ height: 200 }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            {name.common}
          </h5>
          <p className="card-text">
            {name.official}
          </p>
          <a href="#" className="btn btn-outline-danger w-100">
            Remove Country
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
