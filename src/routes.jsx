import "./assets/css/index.css"

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutUsPage from "./pages/about";
import AirtimeToCashPage from "./pages/products/airtime";
import BusinessPage from "./pages/business";

const AllAppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/airtime" element={<AirtimeToCashPage />} />
                    <Route path="/business" element={<BusinessPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AllAppRoutes;