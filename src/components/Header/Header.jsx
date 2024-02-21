import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="container">

                <ul className='header__list'>
                    <h1>IMR</h1>
                    <li className="header__item">
                        <a href="/login/signin">  Login</a>

                    </li>
                    <li className="header__item">
                        <a href="/login/singup">   About</a>

                    </li>
                    <li className="header__item">
                        <a href="/login/singin">  Contact</a>

                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header