import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logopng.png"

const Navbar =()=>{
    return(
        <header className="header">

        <div>
        <img className="logoheader" alt="Logo" src={logo}  />
        </div>
        
        <div>
            <nav className="nav1">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#cats">Gatitos</a></li>
                <li><a href="#adoption">Adopción</a></li>
                <li><a href="#fostering">Apadrinamiento</a></li>
                <li><a href="#donation">Donación</a></li>
            </nav>
            </div>
            
            <div>
                <CartWidget />
             </div>
        </header> 
    )
}
export default Navbar