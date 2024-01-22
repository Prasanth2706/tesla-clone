import React from 'react'
import './header.css'
import { Images } from '../../images'
import SearchIcon from '@mui/icons-material/Search';
const ChargerHeader = () => {
    return (
        <div className='charger_header'>
            <div className='left_section'>
                <img src={Images.teslalogo} alt="asdvs" className='logo' />
                <span>
                    |
                </span>
                <p className='left_title'>
                    SHOP
                </p>
            </div>

            <div className='middle_section'>
                <p>CHARGING</p>
                <p>VEHICLE ACCESSORIES</p>
                <p>APPAREL</p>
                <p>LIFESTYLE</p>
            </div>
            <div className='right_section'>
                <SearchIcon className='search'/>
                <img className='cart' src={Images.cart} alt="" />
                <p className='menu'>MENU</p>
            </div>

        </div>
    )
}

export default ChargerHeader;