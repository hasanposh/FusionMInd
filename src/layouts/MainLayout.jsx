import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-16">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
      <Outlet />
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
