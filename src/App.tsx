import "./App.css";
import Layout from "./Globals/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AirtimeToCash from "./pages/AirtimeToCash";
import SellGiftCards from "./pages/SellGiftCards";
import BillsPayment from "./pages/BillsPayment";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="sell-giftcards" element={<SellGiftCards />} />
      <Route path="airtime-to-cash" element={<AirtimeToCash />} />
      <Route path="bills-payment" element={<BillsPayment />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </>
  )
);

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "sell-giftcards",
    element: <SellGiftCards />,
  },
  {
    path: "airtime-to-cash",
    element: <AirtimeToCash />,
  },
  {
    path: "sell-giftcards",
    element: <SellGiftCards />,
  },
  {
    path: "bills-payment",
    element: <BillsPayment />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
]);
function App() {
  return (
    <>
      <Layout>
        <Nav />
        <RouterProvider router={routers} />;
      </Layout>
      <Footer />
    </>
  );
}

export default App;
