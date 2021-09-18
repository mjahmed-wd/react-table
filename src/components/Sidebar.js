/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Sidebar = ({ setIsOpenSidebar }) => {
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="">
          <ul
            className="nav-menu-items"
            onClick={() => {
              setIsOpenSidebar(false);
            }}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
