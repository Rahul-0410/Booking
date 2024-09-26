import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL="http://localhost:3001"
axios.defaults.withCredentials=true;

function App() {
  // hero icons used for all icons in jsx
 

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      </Route>
      
    </Routes>
    </UserContextProvider>
    
  );
}

export default App;
