import {  Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { Home } from '../components/home/Home';


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
          <Routes>
              <Route path="home" element={<Home />} />
              {/* <Route path="users" element={<Home />} />
              <Route path="products" element={<Home />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </>
  )
}
