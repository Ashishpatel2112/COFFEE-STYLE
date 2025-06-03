import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Productpage from "./Pages/Productpage";
import Coffeemug from "./Pages/Coffeemug";
import Othermug from "./Pages/Othermug";
import Premiummug from "./Pages/Premiummug";
import Teamugs from "./Pages/Teamugs";
import Blogpage from "./Pages/Blogpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/productpage" element={<Productpage />}></Route>
        <Route path="/productpage/coffeemug" element={<Coffeemug />}></Route>
        <Route path="/productpage/othermug" element={<Othermug />}></Route>
        <Route path="/productpage/premiummug" element={<Premiummug />}></Route>
        <Route path="/productpage/teamug" element={<Teamugs />}></Route>
        <Route path="/blogpage" element={<Blogpage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
