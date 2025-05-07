import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav className={styles.menu}>
               <Link to='/'>Home</Link> 
            </nav>
            <span className={styles.logo}>Emy's</span>
        </div>
    )
}