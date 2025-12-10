import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    
    return (<footer className="footer">© {year} Blog sobre Consolas y Videojuegos</footer>);
}

export default Footer;