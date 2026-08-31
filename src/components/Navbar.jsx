import './Navbar.css';

function Navbar() {
    return (
        <>  
        <div className ="announce"> 
            <span>sum bullshi or wtv</span>
        </div>

        <header className="nav">    
        <div className="container nav-inner">   
            <a href="#top" className="nav-logo">
            <img src="/logo-mark.png" alt="NeoXalle" />
            <span>NeoXalle</span>
            </a>

         <nav className="nav-links">
            <a href="#how">How it works </a>   
            <a href="#sports">Sports </a>  
            <a href="#specs">Specs </a>  
            <a href="#how">FAQ </a>  
            </nav>

            <a href="#pricing" className="btn btn-primary">Pre-order</a>

            </div>
        </header>
        </>
    )
}

export default Navbar;