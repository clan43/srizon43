import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Fav from "./pages/fav/Fav";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fav" element={<Fav />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
// ################# 6 hour 5 minutes ##########
