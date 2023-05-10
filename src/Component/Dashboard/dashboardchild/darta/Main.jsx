// import React, { useState } from 'react'
// import './darta.css'
// import Nav from '../../Navbar/Nav'
// import {  FaPlusSquare } from "react-icons/fa";

// export default function Darta() {
//   const[showform,setshowform]=useState(false)
//   const Additem=()=>{
//     setshowform(true)
//   }

//   return (
//     <div className='main'>
//       <Nav/>
//       <div className="container">
//        <div className="adders" ><button onClick={Additem}> <FaPlusSquare/></button></div>

//       <table border={1}>
//         <tr>

//           <th className='s_n_d_m'>S.N</th>
//           <th className='s_n_d_m'>Number</th>
//           <th className='s_n_d_m'>Date</th>
//           <th className='s_n_d_m'>Miti</th>
//           <th className='s_n_d_m'>Total recieve Letter</th>
//           <th className='s_n_d_m'>Received Date</th>
//           <th className='le_su'>Letter issue company</th>
//           <th className='s_n_d_m'>Office  Ref No. </th>
//           <th className='le_su'>Subject</th>
//           <th className='s_n_d_m'> Previous Ref No. </th>
//           <th className='s_n_d_m'>Name</th>
//           <th className='s_n_d_m'>Signature</th>
//           <th className='s_n_d_m'>Date</th>
//           <th className='s_n_d_m'>Remark</th>
//         </tr>
//         <tr>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//           <td>h</td>
//         </tr>
//       </table>
//      {showform &&  <form action="">
//         <div className="input_label">
//         <label htmlFor="sn">Sn</label>
//         <input type="text"  className='sn'/>
//         </div>
//         <div className="input_label">
//         <label htmlFor="sn">number</label>
//         <input type="text"  className='sn'/>
//         </div>
//         <div className="input_label">
//         <label htmlFor="sn">Date</label>
//         <input type="text"  className='sn'/>
//         </div>


//       </form>
//       }
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import './darta.css';
import Nav from '../../Navbar/Nav';
import { FaPlusSquare } from "react-icons/fa";

export default function Darta() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    sn: '',
    number: '',
    date: '',
    miti: '',
    totalReceivedLetter: '',
    receivedDate: '',
    letterIssueCompany: '',
    officeRefNo: '',
    subject: '',
    previousRefNo: '',
    name: '',
    signature: '',
    checkerdate: '',
    remark: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleAddItem = () => {
    setTableData([...tableData, formData]);
    setFormData({
      sn: '',
      number: '',
      date: '',
      miti: '',
      totalReceivedLetter: '',
      receivedDate: '',
      letterIssueCompany: '',
      officeRefNo: '',
      subject: '',
      previousRefNo: '',
      name: '',
      signature: '',
      checkerdate: '',
      remark: ''
    });
    setShowForm(false);
    alert('Data has been applied successfully.');
  }

  return (
    <div className='main'>
      <Nav />
      <div className="container">
        <div className="adders">
          <button onClick={() => setShowForm(true)}>
            <FaPlusSquare />
          </button>
        </div>

        <table border={1}>
          <thead>
            <tr>
              <th className='s_n_d_m'>S.N</th>
              <th className='s_n_d_m'>Number</th>
              <th className='s_n_d_m'>Date</th>
              <th className='s_n_d_m'>Miti</th>
              <th className='s_n_d_m'>Total recieve Letter</th>
              <th className='s_n_d_m'>Received Date</th>
              <th className='le_su'>Letter issue company</th>
              <th className='s_n_d_m'>Office  Ref No. </th>
              <th className='le_su'>Subject</th>
              <th className='s_n_d_m'> Previous Ref No. </th>
              <th className='s_n_d_m'>Name</th>
              <th className='s_n_d_m'>Signature</th>
              <th className='s_n_d_m'>Date</th>
              <th className='s_n_d_m'>Remark</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.number}</td>
                <td>{item.date}</td>
                <td>{item.miti}</td>
                <td>{item.totalReceivedLetter}</td>
                <td>{item.receivedDate}</td>
                <td>{item.letterIssueCompany}</td>
                <td>{item.officeRefNo}</td>
                <td>{item.subject}</td>
                <td>{item.previousRefNo}</td>
                <td>{item.name}</td>
                <td>{item.signature}</td>
                <td>{item.checkerdate}</td>
                <td>{item.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showForm && (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input_label">
              <label htmlFor="sn">Sn</label>
              <input type="text" name="sn" value={formData.sn} className='sn' onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="number">Number</label>
              <input type="text" name="number" value={formData.number} className='sn' onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="date">Date</label>
              <input type="text" name="date" value={formData.date} className='sn' onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="miti">Miti</label>
              <input type="text" name='miti'value={formData.miti} className='sn' onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="totalReceivedLetter">Total received lettter</label>
              <input type="text" name='totalReceivedLetter' className='sn' value={formData.totalReceivedLetter} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="receivedDate">Received Date</label>
              <input type="text"  name='receivedDate' className='sn'value={formData.receivedDate} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="letterIssueCompany">Letter issus company</label>
              <input type="text" name='letterIssueCompany' className='sn' value={formData.letterIssueCompany} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="officeRefNo">office Ref No</label>
              <input type="text"name='officeRefNo' className='sn' value={formData.officeRefNo} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="subject">Subject</label>
              <input type="text" name= 'subject' lassName='sn' value={formData.subject} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="previousRefNo">Previous ref num</label>
              <input type="text" name='previousRefNo' className='sn' value={formData.previousRefNo}  onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' className='sn'value={formData.name}  onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="signature">Signature</label>
              <input type="text" name= 'signature' className='signature' value={formData.signature} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="checkerdate">date</label>
              <input type="text" name='checkerdate' className='checkerdate' value={formData.checkerdate} onChange={handleInputChange} />
            </div>
            <div className="input_label">
              <label htmlFor="remark">Remark</label>
              <input type="text" name='remark' className='remark' value={formData.remark} onChange={handleInputChange} />
            </div>

            <button type="submit" onClick={handleAddItem}>Apply</button>
          </form>
        )}
      </div>
    </div>
  );
}
