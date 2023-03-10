import { Route, Routes } from "react-router-dom";
import AddService from "./Pages/AddService/AddService";
import Contect from "./Pages/Contect/Contect";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/contact" element={<Contect></Contect>}></Route>
       {/* <Route path="/addService" element={<AddService></AddService>}></Route> */}
       <Route path='/dashboard' element={<Dashboard> </Dashboard>}>
       <Route path='addService' element={<AddService></AddService>}></Route>
       </Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
