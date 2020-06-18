import React from 'react'

const SideMenu = ({optionList = [] , active = 1 , onClickHandler}) => {
    return (
        <div className="sidemenu">
            <ul className="list-group">
                {optionList.map((menu,index) => 
                 <li 
                    key={index} 
                    className={`list-group-item ${index === active ? "active" : ""}`}
                    onClick= {() => onClickHandler(index)}
                >
                    {menu}
                </li> 
                )}
            </ul>
        </div>
    )   
}

export default SideMenu