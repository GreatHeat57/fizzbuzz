import React from "react";
import Home from "pages/home";
import FizzBuzz from "pages/fizzbuzz";
import DefaultLayout from "components/layouts/default";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/usermanagement" element={<DefaultLayout children={<Home />} />} />
      <Route path="/fizzbuzz" element={<DefaultLayout children={<FizzBuzz />} />} />
    </Routes>
  );
};

export default Router;
