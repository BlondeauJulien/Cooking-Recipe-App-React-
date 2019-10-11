import React from 'react'
import LogoNav from './LogoNav'
import NavBar from './NavBar'
import SearchBarNav from './SearchBarNav'

export default function Header() {
    return (
        <header>
            <NavBar />
            <LogoNav />
            <SearchBarNav />
        </header>
    )
}
