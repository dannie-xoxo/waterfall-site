import React, { useEffect, useState, useRef } from 'react'
import '../Part1/part1.css'
import sky from '../images/img4.png';
import mount1 from '../images/img5.png';
import mount2 from '../images/img6.png';
function Part1() {

    const[active, setActive]= useState('mainNav');
    const[toggleIcon, setToggleIcon] = useState('toggler');

    const toggle =() => {
        active=== 'mainNav'
        ? setActive('mainNav nav-active')
        : setActive('mainNav')

        toggleIcon==='toggler'
        ? setToggleIcon ('toggler toggle')
        : setToggleIcon('toggler');
    }

    const inner= useRef()
 
    const[offsetY, setOffsetY] = useState(0);
    const[offsetHeight, setOffsetHeight] = useState(0);
    const[headerY, setHeaderY] =useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
        setOffsetHeight(inner.current.offsetHeight);
        setHeaderY(inner.current.getBoundingClientRect())

    }
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            console.log(inner.current.getBoundingClientRect())
            console.log(inner.current.offsetHeight)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        },[])

    return ( 
        <>
         <div className='container'>
            <nav className='keyNav'>
            <h1 className='header'> Globe Express</h1>
            <div className="border"></div>
                <ul className= {active}>
                <li className='navItem'><a className='active' href="#Home" >Home</a></li>
                <li className='navItem'><a href="#places" className='navLink'>Places</a></li>
                <li className='navItem'><a href="#container2" className='navLink'>Destinations</a></li>
                <li className='navItem'><a href="#offers" className='navLink'>Offers</a></li>
                <li className='navItem'><a href="#contact" className='navLink'>Contact Us</a></li>
                </ul>
                <div onClick={toggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
            <h1 className='big-header' ref={inner} style={{transform: `translateY(${offsetY * 0.5}px)`,
             opacity: offsetHeight /( headerY.top + offsetY)}}>falls</h1>
        <img className= 'sky' src={sky} alt='' />
        <img className= 'mount1' src={mount1} alt='' />
        <img className= 'mount2' src={mount2} alt='' />
        </div>
        </>
     );
}

export default Part1;