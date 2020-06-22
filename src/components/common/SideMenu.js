import React from "react";

const SideMenu = ({ optionList = [], heading, active = 1, onClickHandler }) => {
  return (
    <div className="sidemenu font-sm">
      <ul className="list-group">
        {heading && <li className="list-group-item heading"> {heading} </li>}
        {optionList.map((menu, index) => (
          <li
            key={index}
            className={`list-group-item menu-item ${
              index === active ? "active" : ""
            }`}
            onClick={() => onClickHandler(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
