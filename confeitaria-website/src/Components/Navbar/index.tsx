import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <span>Emy's</span>
            <nav>
               <Link to='/'>Home</Link> 
            </nav>
        </>
    )
}