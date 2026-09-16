import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./admin/Admin";
import SingleCategory from "./admin/SingleCategory";
import TwoCategories from "./admin/TwoCategories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />

        <Route path="/single-category" element={<SingleCategory />} />

        <Route path="/two-categories" element={<TwoCategories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
