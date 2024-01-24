import React from 'react'
import './apparel.css'
import { Images } from '../../images'
import AccessList from '../VehicleAccessories/AccessList/AccessList'
import Subtitle from '../SubTitle'


const Apparel = () => {
    const MEN = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'TEES' },
        { id: 3, item: 'SWEATSHIRTS AND HOODIES' },
        { id: 4, item: 'OUTERWEAR' },
        { id: 5, item: 'JOGGERS' },
        { id: 6, item: 'HATS' },
        { id: 7, item: 'SOCKS' },
    ]
    const WOMEN = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'TEES' },
        { id: 3, item: 'SWEATSHIRTS AND HOODIES' },
        { id: 4, item: 'OUTERWEAR' },
        { id: 5, item: 'JOGGERS' },
        { id: 6, item: 'HATS' },
        { id: 7, item: 'SOCKS' },
    ]

    const KIDS = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'TEES' },
        { id: 3, item: 'SWEATSHIRTS AND HOODIES' },
        { id: 4, item: 'OUTERWEAR' },
        { id: 5, item: 'JOGGERS' },
        { id: 6, item: 'HATS' },
        { id: 7, item: 'SOCKS' },
    ]


    return (
        <div className='main_accessories'>
            <div className='cyberTruck'>
                <Subtitle value='MEN' className='access_sub_value' />
                <AccessList value={MEN} />
            </div>
            <div className='models'>
                <Subtitle value='WOMEN' className='access_sub_value' />
                <AccessList value={WOMEN} />
            </div>
            <div className='model3'>
                <Subtitle value='KIDS' className='access_sub_value' />
                <AccessList value={KIDS} />
            </div>
            <div className='cyber_apparel'>
                <img src={Images.cyberShirt} alt="" />
                <div className='cybershirt_name'>
                    <p className='cyber_crewneck'>
                        CYBERTRUCK ELEVATE CREWNECK
                    </p>
                    <p>
                        SWEATSHIRT
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Apparel;