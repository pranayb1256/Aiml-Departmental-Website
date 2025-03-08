import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the current route's component */}
      <Footer />
    </>
  );
}

export default Layout;
