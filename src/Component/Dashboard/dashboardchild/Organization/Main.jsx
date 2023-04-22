import React, { useState } from "react";
import { FaBuilding} from "react-icons/fa";
import '../dropdown.css'

function OrganizationDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="icon"><FaBuilding/></div> 
      <div className="name">Organization</div>
  
     {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Coporate</a></li>
          <li><a href="#">Branch</a></li>
          
        </ul>
      )}
    </div>
    </div>
  );
}

export default OrganizationDropdownMenu;