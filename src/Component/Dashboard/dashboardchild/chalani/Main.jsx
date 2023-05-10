// import React, { useState } from "react";
// import { FaFile} from "react-icons/fa";
// import '../dropdown.css'

// function ChalaniDropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <div className="dropdown-header" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//       <div className="icon"><FaFile/></div> 
//     <div className="name">Chalani</div>

//      {isOpen && (
//         <ul className="dropdown-menu">
//           <li><a href="#">Chalani</a></li>


//         </ul>
//       )}
//     </div>
//     </div>
//   );
// }

// export default ChalaniDropdownMenu;
import React from 'react'
import '../darta/darta.css'
import Nav from '../../Navbar/Nav'

export default function Chalani() {
  return (
    <div className='main'>
      <Nav />
      <div className="container">
        <table border={1}>
          {/* <thead> */}
            <tr>
            <th className='s_n_d_m'>S.Nw</th>
                <th className='s_n_d_m'>Number</th>
                <th className='s_n_d_m'>Date</th>
                <th className='s_n_d_m'>Miti</th>
                <th className='s_n_d_m'>Total recieve Letter</th>
                  <th className='s_n_d_m'>Letter issue Date</th>
                  <th className='le_su'>Letter issue company</th>
                  <th className='le_su'>Subject</th>
                  <th className='s_n_d_m'> Previous Ref No. </th>
                  <th className='s_n_d_m'>Ticket</th>
                  <th className='s_n_d_m'>Remark</th>
            
            </tr>
          {/* </thead>
          <tbody> */}
            <tr>
              <td>hh</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
              <td>iki</td>
            </tr>
          {/* </tbody> */}
        </table>
      
        {/* <table border={1}>
          <thead>

              <tr>
              <tr>
                <th colSpan="4">Chalani</th>
              </tr>
              <tr>
                <th className='s_n_d_m'>S.Nw</th>
                <th className='s_n_d_m'>Number</th>
                <th className='s_n_d_m'>Date</th>
                <th className='s_n_d_m'>Miti</th>
                </tr>
                </tr>
                <tr>
                  <tr><th colSpan="2">Cahani hune letter</th></tr>
                  <tr>
                  <th className='s_n_d_m'>Total recieve Letter</th>
                  <th className='s_n_d_m'>Letter issue Date</th>
                  <th className='le_su'>Letter issue company</th>
                  <th className='le_su'>Subject</th>
                  <th className='s_n_d_m'> Previous Ref No. </th>
                  <th className='s_n_d_m'>Ticket</th>
                  <th className='s_n_d_m'>Remark</th>
                </tr>
                </tr>    
            </thead>
            <tbody>
              <tr>
                <td>hh</td></tr>           
              <tr>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>
                <td>jiuju</td>



              </tr>
  
            </tbody>
        </table> */}
      </div>
    </div>
  )
}
