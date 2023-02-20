import * as React from 'react';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';

export default function Footer() {
  return (
    <div className='footer-wrap' style={{bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-evenly', height:"35vh", backgroundColor:"grey"}}>
      <div className='section' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <h3>Get to Know Us</h3>
        <ul className='navbar-nav'>
          <li className='nav-item' style={{fontSize:"15px"}}>
            <a className='nav-link' title='About Us' href='/AboutUs'>About Us</a>
          </li>
          <li className='nav-item' style={{fontSize:"15px"}}>
            <a className='nav-link' title='Contact Us' href='/ContactUs'>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="social-media-icons" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <h3>Connect with Us </h3>
        <a href="https://twitter.com">
          <Twitter fontSize="large" />
        </a>
        <a href="https://facebook.com">
          <Facebook fontSize="large" />
        </a>
        <a href="https://instagram.com">
          <Instagram fontSize="large" />
        </a>
      </div>
    </div>
  );
}