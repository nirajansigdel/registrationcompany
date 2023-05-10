
import { Maindashboard } from "./Component/Dashboard/maindashboard/Maindashboard";
import Organization from "./Component/Dashboard/dashboardchild/Organization/Main";
import User from "./Component/Dashboard/dashboardchild/User/Main/Main";
import Storage from "./Component/Dashboard/dashboardchild/storage/Main";
import Login from "./Component/Login/Login";
import Admin from "./Component/Dashboard/dashboardchild/User/Main/Main2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Darta from "./Component/Dashboard/dashboardchild/darta/Main";
import Chalani from "./Component/Dashboard/dashboardchild/chalani/Main";
import Employer from "./Component/Dashboard/dashboardchild/User/Employer/Employer";
import Corporate from "./Component/Dashboard/dashboardchild/Organization/Main2";
import Level1 from "./Component/Dashboard/dashboardchild/User/Admins/Setpassword/level/Level1";
import Level2 from "./Component/Dashboard/dashboardchild/User/Admins/Setpassword/level/Level2";
import Level3 from "./Component/Dashboard/dashboardchild/User/Admins/Setpassword/level/Level3";
import Level4 from "./Component/Dashboard/dashboardchild/User/Admins/Setpassword/level/Level4";
import ResetLevel from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/Resetlevel1";
import Dropdown from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/dop";
import View from "./Component/Dashboard/dashboardchild/Organization/view/View";
import ResetLevel1 from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/Resetlevel1";
import ResetLevel2 from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/Resetlevel2";
import ResetLevel4 from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/Resetlevel4";
import ResetLevel3 from "./Component/Dashboard/dashboardchild/User/Admins/Resetpassword/Resetlevel3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Maindashboard />}></Route>
        <Route exact path="user" element={<User />}></Route>
        <Route exact path="admin" element={<Admin/>}></Route>
        <Route exact path="reset" element={<ResetLevel />}></Route>
        <Route exact path="resetbutton1" element={<ResetLevel1/>}></Route>
        <Route exact path="resetbutton2" element={<ResetLevel2/>}></Route>
        <Route exact path="resetbutton3" element={<ResetLevel3/>}></Route>
        <Route exact path="resetbutton4" element={<ResetLevel4/>}></Route>
        <Route exact path="employer" element={<Employer />}></Route>
        <Route exact path="organization" element={<Organization />}></Route>
        <Route exact path="corporate" element={<Corporate />}></Route>
        <Route exact path="Branch" element={<Corporate />}></Route>
        <Route exact path="View" element={<View />}></Route>
        <Route exact path="darta" element={<Darta />}></Route>
        <Route exact path="chalani" element={<Chalani />}></Route>
        <Route exact path="storage" element={<Storage />}></Route>


      </Routes>
      <div className="App">

         {/* <Dropdown/> 
        */}

  

      </div>


    </BrowserRouter>

  );
}

export default App;
