import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import Users from "./pages/users.jsx";

import Header from "./shared/header.jsx";
import Footer from "./shared/footer.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
