import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";

export default function HomePage(){
    return(
        <div>
            <NavBar />
            <Home />
            <About />
            <Services />           
        </div>
    )
}