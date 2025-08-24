import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="app-shell">
      {/* <Navbar /> */}
      <main className="container" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
