import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Header y Footer persisten entre páginas (así el buscador no pierde el foco al navegar).
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
