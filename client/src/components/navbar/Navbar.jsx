import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {

  const [active,setActive] = useState(false);

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);
    };
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentUser = {
    id:1,
    username:"Vishaal",
    isSeller:true
  }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className='container'>
        <div className="logo">
          <Link to="/" className='link'>
            <span className='text'>myTems</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <span>Explore</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                    </>
                  )
                }
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          )}
          

        </div>
      </div>
        
    </div>
    
  );
};
