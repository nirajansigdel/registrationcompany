import React, { useState } from "react";
import { FaUserAlt} from "react-icons/fa";
import '../dropdown.css'

function UserDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="icon"><FaUserAlt/></div> 
    <div className="name">User</div>
  
     {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Admin</a></li>
          <li><a href="#">Employer</a></li>
          
        </ul>
      )}
    </div>
    </div>
  );
}

export default UserDropdownMenu;