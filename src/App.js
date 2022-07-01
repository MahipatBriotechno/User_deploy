import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Component/Home/Home";
// import PaginatedItems from "./pages/User/Component/Pagination";
import AppBarNew from './pages/User/Component/Appbar'
import Footer from "./pages/User/Component/Footer";
import SearchClub from "./pages/User/Pages/SearchClub/SearchClub";
import BookingConfirmed from "./pages/User/Pages/BookingConfirmed/BookingConfirmed";
import SeeClub from "./pages/User/Pages/SeeClub/SeeClub";

const App = () => {
  return (
    <BrowserRouter>
    <AppBarNew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchClub" element={<SearchClub />} />
        <Route path="/seeClub" element={<SeeClub />} />
        <Route path="/bookingConfirmed" element={<BookingConfirmed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
