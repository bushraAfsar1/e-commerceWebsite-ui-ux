'use client'
import Image from "next/image";
import logo from "../../../public/images/logo_header.png"
import HeaderFonts from "./HeaderFonts"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Header:React.FC = ()=> {

  const [isVisible, setIsVisible]= useState<boolean>(false);
   const handleToggle =()=>{
    setIsVisible((prevState) =>!prevState )
   };
    return (
        <header className="header">
        <div className="logo">
        <Image
            src={logo}
     alt="Logo"
     width={30} 
         height={30}
   />   
          <span>Furniro</span>
        </div>
        <nav className="nav">
            <Link className="hLink" href='/'>Home</Link>
            <Link className="hLink" href='/products'>Shop</Link>
            <Link className="hLink" href='/blog'> Blog</Link>
            <Link className="hLink" href='/contact'>Contact</Link>
        </nav>
        <Link href='/sidePage'>         <FontAwesomeIcon className='navMobile' icon={faBars} size="lg" />
        </Link>
        {/* <button className="navButton"  onClick={handleToggle}> 
          {isVisible
          ?
         <div className="flex flex-col h-{200px}">
          
          <Link className="hLink" href='/'>Home</Link>
            <Link className="hLink" href='/products'>Shop</Link>
            <Link className="hLink" href='/blog'> Blog</Link>
            <Link className="hLink" href='/contact'>Contact</Link>
        </div>: <div>         <FontAwesomeIcon className='navMobile' icon={faBars} size="lg" />
        </div> }
        </button> */}

        <div className="icons">
        <HeaderFonts/>
        </div>
      </header>

    );
  }
  export default Header;