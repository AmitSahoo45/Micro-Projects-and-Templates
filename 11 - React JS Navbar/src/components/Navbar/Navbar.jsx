import React from 'react'
import SangeeticLogo from '../../assets/Sangeetic-Logo.png'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Menu } from '@material-ui/icons';

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu__bars'>
                    <Menu fontSize='large'/>
                </Link>
            </div>
            
        </>
    )
}

export default Navbar