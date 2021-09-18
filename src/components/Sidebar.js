/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ setIsOpenSidebar }) => {

  return (
    <div>
        <button onClick={() => {
            setIsOpenSidebar(false);
        }}>Open/Close</button>
     <ul>
         <li>hi</li>
         <li>hello</li>
         <li>new</li>
     </ul>
    </div>
  );
};

export default Sidebar;
