import React, { useState } from "react";
import { FaFile} from "react-icons/fa";
import '../dropdown.css'

function ChalaniDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="icon"><FaFile/></div> 
    <div className="name">Chalani</div>
  
     {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Chalani</a></li>
        
          
        </ul>
      )}
    </div>
    </div>
  );
}

export default ChalaniDropdownMenu;