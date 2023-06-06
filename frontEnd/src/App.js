import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Component/Pages/Home/Home";
import Login from "./Component/Login/Login";
import Employer from "./Component/Pages/Users/Employer/Employer";
import Darta from './Component/Pages/Darta/Darta'
import Chalani from './Component/Pages/chalani/Chalani';
import Storage from './Component/Pages/storage/Main'
import View from './Component/Pages/Organizations/View'
import Organization from "./Component/Pages/Organizations/Organizationchild/Main";
import Corporate from "./Component/Pages/Organizations/organizationgrandchild/Main2";
import User from "./Component/Pages/Users/User";
import Setlevel from "./Component/Pages/Users/setlevel";
import Bulk from "./Component/Pages/storage/Bulk/Bulk";
import Resetlevel from "./Component/Pages/Users/Resetlevel";
import Handover from "./Component/Pages/storage/HandOver/Handover";
import Registration from "./Registartion/Registration";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Registration />}></Route>
         <Route exact path="/login" element={<Login />}></Route> 
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="user" element={<User />}></Route>
        <Route exact path="employer" element={<Employer />}></Route>
        <Route exact path="admin" element={<Setlevel />}></Route>
        <Route exact path="reset" element={<Resetlevel />}></Route>
        <Route exact path="organization" element={<Organization />}></Route>
        <Route exact path="corporate" element={<Corporate />}></Route>
        <Route exact path="Branch" element={<Corporate />}></Route>
        <Route exact path="View" element={<View />}></Route>
        <Route exact path="darta" element={<Darta />}></Route>
        <Route exact path="chalani" element={<Chalani />}></Route>
        <Route exact path="storage" element={<Storage />}></Route>
        <Route exact path="bulk" element={<Bulk />}></Route>
        <Route exact path="handover" element={<Handover />}></Route>



      </Routes>
      <div className="App">

      </div>


    </BrowserRouter>

  );
}

export default App;
