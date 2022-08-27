import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                   
                    
                    <div className="footer__about" >
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Towards the goal of bringing a new joy in to the customer through bring new and stylist product in Bucketary.
                        </p>
                    </div>
                    
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
