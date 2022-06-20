import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./pages/Home.js";
import Users from "./pages/Users.js";
import NewCostItem from "./pages/NewCostItem.js";
import Report from "./pages/Report.js";
import NewUser from "./pages/NewUser.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newcost" element={<NewCostItem />} />
          <Route path="/report" element={<Report />} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
