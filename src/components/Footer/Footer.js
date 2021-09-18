import React from "react";

const Footer = ({isOpenSidebar}) => {
  return (
    <div className={`footer w-100 m-0 mt-3 p-2 bg-secondary text-white pl-4 pr-4 text-center`}>
      <div className="row">
        <div className="col-4">
          <p>University</p>
          <h4>MC College Campus, National University</h4>
        </div>
        <div className="col-4">
          <p>Subject</p>
          <h4>Mathematics</h4>
        </div>
        <div className="col-4">
          <p>Passing Year</p>
          <h4>2019</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
