import React from "react";

const Header = () => {
  const personalInfo = {
    name: "Jubair",
    address: "Adabor",
    phone: "01782557441",
  };
  return (
    <div className="d-flex w-100 justify-content-end align-items-center">
      <h5>{personalInfo?.name}</h5>,<h5 className="ml-3">{personalInfo?.address}</h5>,
      <h5 className="ml-3">{personalInfo?.phone}</h5>
    </div>
  );
};

export default Header;
