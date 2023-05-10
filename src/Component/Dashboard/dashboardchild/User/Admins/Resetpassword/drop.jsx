// import React, { useState } from 'react'

// function Dropdown() {
//     const [selectedCountry, setSelectedCountry] = useState("-- Select Country --");
//     const [selectedState, setSelectedState] = useState("-- Select State --");
//     const [selectedCity, setSelectedCity] = useState("-- Select City --");
//     const [selectedshelf, setshelf] = useState("-- Select shelf --");

//     const floor = [
//         {
//             name: "USA",
//             Room: [
//                 { name: "Room 1",
//                  Rack: {
//                 name:"rack 1",
//                 shelf:["Los Angeles", "San Francisco", "San Diego"]
//                  }
//                      },
//                 { name: "New York", 
//                 cities: ["New York City", "Albany", "Buffalo"] },
//                 { name: "Texas",
//                  cities: ["Houston", "Austin", "Dallas"] }
//             ]
//         },
//         {
//             name: "Canada",
//             states: [
//                 { name: "Ontario", cities: ["Toronto", "Ottawa", "Hamilton"] },
//                 { name: "Quebec", cities: ["Montreal", "Quebec City", "Gatineau"] },
//                 { name: "British Columbia", cities: ["Vancouver", "Victoria", "Surrey"] }
//             ]
//         }
//     ];

//     const handleCountryChange = (event) => {
//         setSelectedCountry(event.target.value);
//         setSelectedState("-- Select State --");
//         setSelectedCity("-- Select City --");
//     };

//     const handleStateChange = (event) => {
//         setSelectedState(event.target.value);
//         setSelectedCity("-- Select City --");
//     };

//     const handleCityChange = (event) => {
//         setSelectedCity(event.target.value);
//     };
//     const handleshelfChange = (event) => {
//         setshelfCity(event.target.value);
//     };

//     return (
//         <div>
//             <select value={selectedCountry} onChange={handleCountryChange}>
//                 <option disabled>-- Select Country --</option>
//                 {floor.map(floor => (
//                     <option key={floor.name} value={floor.name}>{floor.name}</option>
//                 ))}
//             </select>

//             <select value={selectedState} onChange={handleStateChange} disabled={selectedCountry === "-- Select Country --"}>
//                 <option disabled>-- Select State --</option>
//                 {selectedCountry !== "-- Select Country --" && floor.find(floor => floor.name === selectedCountry).room.map(room => (
//                     <option key={room.name} value={room.name}>{room.name}</option>
//                 ))}
//             </select>

//             <select value={selectedCity} onChange={handleCityChange} disabled={selectedState === "-- Select State --"}>
//                 <option disabled>-- Select City --</option>
//                 {selectedState !== "-- Select State --" && floor.find(floor => floor.name === selectedCountry).room.find(room => room.name === selectedState).rack.map(rack => (
//                     <option key={rack.name} value={rack.name}>{rack.name}</option>
//                 ))}
//             </select>
//             <select value={selectedshelf} onChange={handleshelfChange} disabled={selectedState === "-- Select State --"}>
//                 <option disabled>-- Select City --</option>
//                 {selectedState !== "-- Select State --" && floor.find(floor => floor.name === selectedCountry).room.find(room=> room.name === selectedState).rack.find(rack => rack.name === selectedState).shelf.map(shelf => (
//                     <option key={shelf} value={shelf}>{shelf}</option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// export default Dropdown;












// //////////////////////
// import React, { useState } from 'react'

// function Dropdown() {
//     const [selectedCountry, setSelectedCountry] = useState("-- Select Country --");
//     const [selectedState, setSelectedState] = useState("-- Select State --");
//     const [selectedCity, setSelectedCity] = useState("-- Select City --");

//     const countries = [
//         {
//             name: "USA",
//             states: [
//                 { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego"] },
//                 { name: "New York", cities: ["New York City", "Albany", "Buffalo"] },
//                 { name: "Texas", cities: ["Houston", "Austin", "Dallas"] }
//             ]
//         },
//         {
//             name: "Canada",
//             states: [
//                 { name: "Ontario", cities: ["Toronto", "Ottawa", "Hamilton"] },
//                 { name: "Quebec", cities: ["Montreal", "Quebec City", "Gatineau"] },
//                 { name: "British Columbia", cities: ["Vancouver", "Victoria", "Surrey"] }
//             ]
//         }
//     ];

//     const handleCountryChange = (event) => {
//         setSelectedCountry(event.target.value);
//         setSelectedState("-- Select State --");
//         setSelectedCity("-- Select City --");
//     };

//     const handleStateChange = (event) => {
//         setSelectedState(event.target.value);
//         setSelectedCity("-- Select City --");
//     };

//     const handleCityChange = (event) => {
//         setSelectedCity(event.target.value);
//     };

//     return (
//         <div>
//             <select value={selectedCountry} onChange={handleCountryChange}>
//                 <option disabled>-- Select Country --</option>
//                 {countries.map(country => (
//                     <option key={country.name} value={country.name}>{country.name}</option>
//                 ))}
//             </select>

//             <select value={selectedState} onChange={handleStateChange} disabled={selectedCountry === "-- Select Country --"}>
//                 <option disabled>-- Select State --</option>
//                 {selectedCountry !== "-- Select Country --" && countries.find(country => country.name === selectedCountry).states.map(state => (
//                     <option key={state.name} value={state.name}>{state.name}</option>
//                 ))}
//             </select>

//             <select value={selectedCity} onChange={handleCityChange} disabled={selectedState === "-- Select State --"}>
//                 <option disabled>-- Select City --</option>
//                 {selectedState !== "-- Select State --" && countries.find(country => country.name === selectedCountry).states.find(state => state.name === selectedState).cities.map(city => (
//                     <option key={city} value={city}>{city}</option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// export default Dropdown;
