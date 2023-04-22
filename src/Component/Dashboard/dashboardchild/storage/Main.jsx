import React, { useState } from "react";
import { FaStoreAlt} from "react-icons/fa";
import '../dropdown.css'

function UserDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="icon"><FaStoreAlt/></div> 
    <div className="name">Storage</div>
  
     {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Bulk file</a></li>
          <li><a href="#">HandOver Temparory</a></li>
          <li><a href="#">HandOver Permanant </a></li>   
        </ul>
      )}
    </div>
    </div>
  );
}

export default UserDropdownMenu;