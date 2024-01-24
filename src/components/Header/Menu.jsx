import { Close } from '@mui/icons-material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import './menu.css';

const TeslMenu = ({ openMenu, onClose }) => {

  return (
    <div className={`menu_section ${openMenu ? 'open' : ''}`}>
      <div className='close_icon' onClick={onClose}>
        <Close style={{ color: "lightgray" }} />
      </div>
      <div className='menu_area'>
        <li><a href="#">SHOP FAQ</a></li>
        <li><a href="#">VIEW OR MANAGE ORDER</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">SIGN IN</a></li>
      </div>
      <div className='menu_language'>
        <LanguageIcon style={{ color: "lightgray" }} />
        <div className='menu_country'>
          <p>
            UNITED STATES
          </p>
          <p>
            ENGLISH
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeslMenu