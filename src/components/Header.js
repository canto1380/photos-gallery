import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ handleSubmit }) => {
  return (
    <div>
      <h1 className=''>Gallery</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
