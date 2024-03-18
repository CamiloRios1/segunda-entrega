import Logo from "../../assets/Catshop.png"
import CartWidget from "../../components/Cartwidget/CartWidget"

const Navbar =()=>{
    return(
        <header className="Navbar">

        
        <img className="logoheader" alt="Logo" src={Logo}  />
        
        
        <div>
            <nav className="Navheader">
                <li><a href="#home">Tienda</a></li>
                <li><a href="#adopcion">Adopción</a></li>
                <li><a href="#apadrinamiento">Apadrinamiento</a></li>
                <li><a href="#donacion">Donación</a></li>
            </nav>
        </div>
        
        <div>
            <CartWidget />
         </div>

        </header> 
    )
}

export default Navbar