import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <span className={styles.logo}>Emy's</span>
            <nav className={styles.navbar}>
                <Link to='/'>Home</Link> 
                <Link to='/cardapio'>Cardápio</Link> 
                <Link to='/contato'>Contato</Link> 
            </nav>
    )
}