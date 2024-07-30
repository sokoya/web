import "./assets/css/index.css"

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutUsPage from "./pages/about";

const AllAppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AllAppRoutes;