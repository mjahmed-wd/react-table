import React from "react";
import * as FaIcons from "react-icons/fa";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Counter = ({ setIsOpenSidebar, isOpenSidebar, children }) => {
  return (
    <div className=" " onClick={() => setIsOpenSidebar(true)}>
      {
        <div
          className={`p-3 navbar-toggle text-white w-100 d-flex align-items-center ${
            isOpenSidebar ? " justify-content-between " : " justify-content-end"
          }`}
        >
          {!isOpenSidebar && (
            <button
              className="btn primary"
              onClick={() => {
                setIsOpenSidebar(false);
              }}
            >
              <FaIcons.FaBars color="#fff" />
            </button>
          )}
          <Header />
        </div>
      }
      {children}
      <Footer />
    </div>
  );
};

export default Counter;
