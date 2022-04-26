import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {  Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/User/UserContainer";
function App() {
  return (
    
    <div className="app-wrapper">
      <Header />
      <div className="mainContent">
        <Navbar />
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element ={<UserContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
