import {MouseEvent} from 'react'
import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        const newRoute = e.currentTarget.getAttribute('href')
        if(newRoute) {
            navigate(newRoute)
        }
    }

    return <nav>
        <ul>
            <li><a onClick={handleAnchorClick} href="/">Home</a></li>
            <li><a onClick={handleAnchorClick} href="contato">Contato</a></li>
        </ul>
    </nav>
}