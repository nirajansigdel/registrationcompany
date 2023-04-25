import Nav from "./Component/Dashboard/Navbar/Nav";
import Organization from "./Component/Dashboard/dashboardchild/Organization/Main";
import Storage from "./Component/Dashboard/dashboardchild/storage/Main";
import User from "./Component/Dashboard/dashboardchild/User/Main/Main";
import { Maindashboard } from "./Component/Dashboard/maindashboard/Maindashboard";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
{/* <Maindashboard/> */}
{/* <User/> */}
{/* <Organization/> */}
{/* <Storage/> */}
<Login/>
     
    </div>
  );
}

export default App;
