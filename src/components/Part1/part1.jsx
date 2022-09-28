import React from 'react'
import '../Part1/part1.css'
import {BiPlanet} from 'react-icons/bi';
import sky from '../images/img4.png';
import mount1 from '../images/img5.png';
import mount2 from '../images/img6.png';
function Part1() {
    return ( 
        <>
         <div className='container'>
            <nav className='keyNav'>
            <h1 className='header'> Globe Express</h1>
            <div className="border"></div>
                <ul className= 'mainNav'>
                <li className='navItem'><a className='active' href="#Home" >Home</a></li>
                <li className='navItem'><a href="#menu" className='navLink'>Places</a></li>
                <li className='navItem'><a href="#menu" className='navLink'>Destinations</a></li>
                <li className='navItem'><a href="signIn" className='navLink'>Offers</a></li>
                <li className='navItem'><a href="#create" className='navLink'>Contact Us</a></li>
                </ul>
            </nav>
            <h1 className='big-header'>falls</h1>
        <img className= 'sky' src={sky} alt='' />
        <img className= 'mount1' src={mount1} alt='' />
        <img className= 'mount2' src={mount2} alt='' />
        </div>
        </>
     );
}

export default Part1;