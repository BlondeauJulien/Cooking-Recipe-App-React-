import React from 'react'


export default function NavBar() {
    return (
        <nav>
            <ul className="nav-ul">
                <li className="nav-list"><a href="http://localhost:3000/">Home</a></li>
                <li className="nav-list" >|</li>
                <li className="nav-list"><a href="http://localhost:3000/">Recipes</a></li>
                <li className="nav-list">|</li>
                <li className="nav-list"><a href="http://localhost:3000/">About</a></li>
            </ul>
        </nav>
    )
}
