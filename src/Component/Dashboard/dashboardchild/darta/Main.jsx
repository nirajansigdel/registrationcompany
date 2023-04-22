import React, { useState } from "react";
import { FaFileAlt} from "react-icons/fa";
import '../dropdown.css'

function DartaDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="icon"><FaFileAlt/></div> 
    <div className="name">Darta</div>
  
     {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Darta</a></li>
        </ul>
      )}
    </div>
    </div>
  );
}

export default DartaDropdownMenu;