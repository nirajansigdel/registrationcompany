import React, { useEffect, useState } from "react";

function Dropdown() {
  const [selectedFloors, setSelectedFloors] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedRacks, setSelectedRacks] = useState(null);
  const [selectedShelves, setSelectedShelves] = useState(null);
  const [selectedFileNames, setSelectedFileNames] = useState(null);
  const [selectedFileNo, setSelectedFileNo] = useState("-- Select File No --");  

  const data = [
    {
      name: "floor1",
      rooms: [
        {
          name: "room1",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room2",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "floor1",
      rooms: [
        {
          name: "room1",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "room2",
          racks: [
            {
              name: "rack1",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              name: "rack2",
              shelves: [
                {
                  name: "shelve 1",
                  file: [
                    {
                      name: "nirajan",
                      file_no: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

 

  console.log(selectedFloors, selectedRooms, selectedRacks,selectedShelves,selectedFileNames,selectedFileNo);
  return (
    <>
        {/* =======================for floor=================== */}
      <select onChange={(e) => setSelectedFloors(data.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Floor</option>
        {
          data.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>
     
          {/* =======================for room ===================  */}
      {selectedFloors && <select onChange={(e) => setSelectedRooms(selectedFloors.rooms.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Rooms</option>
        {
          selectedFloors.rooms.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
    
            {/* =======================for rack ===================  */}
      {selectedRooms && <select onChange={(e) => setSelectedRacks(selectedRooms.racks.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Racks</option>
        {
          selectedRooms.racks.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
         
         {/* =======================for shelve ===================  */}
          
      </select>}
      {selectedRacks && <select onChange={(e) => setSelectedShelves(selectedRacks.shelves.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select Shelves</option>
        {
         selectedRacks.shelves.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
       {/* =======================for File Name ===================  */}
      {selectedShelves && <select onChange={(e) => setSelectedFileNames(selectedShelves.file.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select File Name</option>
        {
         selectedShelves.file.map(i =>
            <option key={i.name} value={i.name}>{i.name}</option>
          )
        }
      </select>}
        {/* =======================for File no ===================  */}
      {selectedFileNames && <select onChange={(e) => setSelectedFileNo(selectedFileNames.file_no.find(i => i.name === e.target.value))}>
        <option value="" disabled selected>Select File No</option>
        {
         selectedFileNames.file_no.map(i =>
            <option key={i} value={i}>{i}</option>
          )
        }
      </select>}
      <div>
       

        
      </div>
    </>
  );
}

export default Dropdown;
