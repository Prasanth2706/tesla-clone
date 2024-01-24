import React, { useState } from 'react'
import './header.css'
import { Images } from '../../images'
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/material';
import TeslMenu from './Menu';
import Chargers from '../Chargers';
import VehicleAccessories from '../VehicleAccessories';
import Apparel from '../Apparel';
import LifeStyle from '../LifeStyle';
const ChargerHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openChargers, setOpenChargers] = useState(false)
    const [openVehicleAccessories, setOpenVehicleAccessories] = useState(false)
    const [openApparel, setOpenApparel] = useState(false)
    const [openLifeStyle, setOpenLifeStyle] = useState(false)


    const handleToggle = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu, 'value')
    }

    return (
        <>
            <div className={`charger_header ${openMenu ? 'blur' : ''}`}>
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
                    <p onClick={() => setOpenChargers(!openChargers)}>CHARGING</p>
                    <p onClick={() => setOpenVehicleAccessories(!openVehicleAccessories)} >VEHICLE ACCESSORIES</p>
                    <p onClick={() => setOpenApparel(!openApparel)}>APPAREL</p>
                    <p onClick={() => setOpenLifeStyle(!openLifeStyle)}>LIFESTYLE</p>
                </div>
                <div className='right_section'>
                    <SearchIcon className='search'/>
                    <img className='cart' src={Images.cart} alt="" />
                    <p onClick={handleToggle} className='menu'>MENU</p>
                    {openMenu && <TeslMenu openMenu={openMenu} onClose={() => setOpenMenu(false)} />}
                    <div className={`blur-overlay ${openMenu ? 'open' : ''}`}></div>
                </div>
            </div>
            {openChargers && <Chargers />}
            {openVehicleAccessories && <VehicleAccessories />}
            {openApparel && <Apparel />}
            {openLifeStyle && <LifeStyle />}
        </>
    )
}

export default ChargerHeader;