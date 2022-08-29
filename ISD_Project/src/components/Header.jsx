import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/Logo.png'

const mainNav = [
    {
        display: "Home Page",
        path: "/"
    },
    {
        display: "Product",
        path: "/catalog"
    },
   
    
    {
        display: "Contact",
        path: "/contact"
    },
    {
        display: "Create  Product",
        path: "/CreateProduct"
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)


    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })

    }, []);

    var loggedInuser = localStorage.getItem("username");

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" /> 
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => {
                                
                                if(loggedInuser=="ineffable" || item.path != "/CreateProduct"){
                                    return(
                                    <div
                                        key={index}
                                        className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                        onClick={menuToggle}
                                    >
                                        <Link to={item.path}>
                                            <span>{item.display}</span>
                                        </Link>
                                    </div>
                                    )
                                   
                                }
                            })
                        }
                    </div>
                    <div className="header__menu__right">
                   
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <div className='header_login'></div>
                        <Link to="/login">
                       <i className="bx bx-user"></i>
                            </Link>
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
