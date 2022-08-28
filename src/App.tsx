import React from "react";

import ProductFullInformation from "@components/ProductFullInformation";
import Products from "@components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product">
          <Route path=":id" element={<ProductFullInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
