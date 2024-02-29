import { useState } from "react";
import LoginPage from "./components/LoginPage";
import "./App.css";
import Dashboard from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [user, setUser] = useState("");
  console.log(user)
  return (
    <div className="App">
      {/* <LoginPage /> */}

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage setUser = {setUser} />}></Route>

          <Route path="/dashboard" element={<Dashboard user={user} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
