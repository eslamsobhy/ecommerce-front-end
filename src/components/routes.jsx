import { Routes, Route, BrowserRouter } from "react-router-dom";
import Category from "./Category";
import App from "../App";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
