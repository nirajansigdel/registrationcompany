import React, { useState } from 'react';
import Nav from '../../../Navbar/Nav';
import { FaEye, FaPlus, FaStoreAlt } from 'react-icons/fa';
import './View.css';

export default function View() {
    const nameofcontent = [
        {
            id: 1,
            name: "Registartion"
        }
        ,
        {
            id: 2,
            name: "Pan No"
        },
        {
            id: 3,
            name: "Tax Clearance"
        },
        {
            id: 4,
            name: "Bidhan"
        } ,
        {
            id: 5,
            name: "Employer Profile"
        } ,
        {
            id: 6,
            name: "Company name"
        } ,
        {
            id: 7,
            name: "Logo"
        } ,
        {
            id: 8,
            name: "Address"
        } ,
        {
            id: 9,
            name: "Email address"
        } 
    ]

    const [file, setFile] = useState(null);

    const handleAdd = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleView = () => {
        if (file) {
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        } else {
            alert('No file selected.');
        }
    };

    return (
        <div className="main">
            <Nav />
            <div className="container">
                <div className="content">
                    {nameofcontent.map(name=>( <div className="content-body">
                        <div className="name">{name.name}</div>
                        <div className="add_see">
                            <label htmlFor="upload" className="add">
                                <FaPlus />
                            </label>
                            <div className="view" onClick={handleView}>
                                <FaEye />
                            </div>
                        </div>
                    </div>))}
                   
                </div>
            </div>
            <input
                id="upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleAdd}
            />
        </div>
    );
}












// import React, { useState } from 'react';
// import Nav from '../../../Navbar/Nav';
// import { FaEye, FaPlus, FaStoreAlt } from 'react-icons/fa';
// import './View.css';

// export default function View() {
//   const [file, setFile] = useState(null);
//   const [fileContent, setFileContent] = useState('');

//   const handleAdd = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFileContent(e.target.result);
//       };
//       reader.readAsText(selectedFile); // Adjust this based on the file type

//       // Alternative: Use reader.readAsDataURL(selectedFile) for image files
//     }
//   };

//   const handleView = () => {
//     if (fileContent) {
//       console.log('Viewing file:', fileContent);
//       // Perform additional view logic with the file content here
//     } else {
//       alert('No file selected.');
//     }
//   };

//   return (
//     <div className="main">
//       <Nav />
//       <div className="container">
//         <div className="content">
//           <div className="content-body">
//             <div className="name">Registration</div>
//             <div className="add_see">
//               <label htmlFor="upload" className="add">
//                 <FaPlus />
//               </label>
//               <div className="view" onClick={handleView}>
//                 <FaEye />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <input
//         id="upload"
//         type="file"
//         style={{ display: 'none' }}
//         onChange={handleAdd}
//       />
//       <div className="file-content">{fileContent}</div>
//     </div>
//   );
// }

