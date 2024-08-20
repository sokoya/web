import "./assets/css/index.css"

import { useLayoutEffect } from 'react';

import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Homepage from "./pages/homepage";
// import Homepage from "./pages/home";
import Homepage from "./pages/hm";
import AboutUsPage from "./pages/about";
import AirtimeToCashPage from "./pages/products/airtime";
import BusinessPage from "./pages/business";
import IndividualPage from "./pages/products/individual";
import WhyPayscribe from "./pages/company/why";
import AppRoutes from "./utils/routes";
import PayBillsPage from "./pages/products/bills";
import EventsPage from "./pages/products/events";
import GiftcardsPage from "./pages/products/giftcards";
import SaveAndEarnPage from "./pages/products/save";
import PaymentsPage from "./pages/products/payments";
import FAQsPage from "./pages/mini/faq";
import ComplaincePage from "./pages/mini/complaint";
import PrivacyPage from "./pages/mini/privacy";
import AbtPage from "./pages/abt";

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const AllAppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/individuals" element={<IndividualPage />} />
                        <Route path={AppRoutes.about_us} element={<AboutUsPage />} />

                        <Route path={AppRoutes.faqs} element={<FAQsPage />} />

                        <Route path={AppRoutes.airtime_to_cash} element={<AirtimeToCashPage />} />
                        <Route path={AppRoutes.bills} element={<PayBillsPage />} />
                        <Route path={AppRoutes.handle_payments} element={<PaymentsPage />} />
                        <Route path={AppRoutes.events} element={<EventsPage />} />
                        <Route path={AppRoutes.sell_giftcards} element={<GiftcardsPage />} />
                        <Route path={AppRoutes.save_and_earn} element={<SaveAndEarnPage />} />


                        <Route path={AppRoutes.business} element={<BusinessPage />} />

                        <Route path={AppRoutes.compliance} element={<ComplaincePage />} />
                        <Route path={AppRoutes.privacy_policies} element={<PrivacyPage />} />
                        <Route path={AppRoutes.compliance} element={<ComplaincePage />} />


                        <Route path="/why-payscribe" element={<WhyPayscribe />} />
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        </div>
    )
}

export default AllAppRoutes;