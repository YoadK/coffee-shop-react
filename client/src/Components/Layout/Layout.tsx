import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
