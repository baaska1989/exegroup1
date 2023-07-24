import Footer from "../components/en/Footer";
import Navbar from "../components/en/Navbar";

const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
     {children}
    <Footer/>
    </>
  )
}

export default MainLayout