import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar2 /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
