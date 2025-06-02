import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testmonials";
import Footer from "../components/Footer";


export default function HomePage(){
    return(
        <div>
            <NavBar />
            <Home />
            <About />
            <Services /> 
            <Testimonials />      
            <Footer />          
        </div>
    )
}