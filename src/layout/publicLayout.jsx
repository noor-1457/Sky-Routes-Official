import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

export default function PublicLayout() {
  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-900">
        <Navbar />

        <main>
          {/* Provide dark context to child pages */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
