import React from 'react'
import './vehicleAccess.css'
import Subtitle from '../SubTitle'
import AccessList from './AccessList/AccessList'
import { Images } from '../../images'

const VehicleAccessories = () => {
    const CYBERTRUCK = [
        { id: 1, item: 'FAETURED PRODUCTS' },
        { id: 2, item: 'FLOOR MATS' },
        { id: 3, item: 'INTERIORS' },
        { id: 4, item: 'EXTERIORS' },
        { id: 5, item: 'VAULT' },
        { id: 6, item: 'WHEEL AND TIRE' },
    ]

    const MODELS = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'FLOOR MATS' },
        { id: 3, item: 'INTERIORS' },
        { id: 4, item: 'EXTERIORS' },
        { id: 5, item: 'WHEEL AND TIRES' },
        { id: 6, item: 'PARTS' },
        { id: 7, item: 'KEYS' },
    ]
    const MODEL3 = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'FLOOR MATS' },
        { id: 3, item: 'INTERIORS' },
        { id: 4, item: 'EXTERIORS' },
        { id: 5, item: 'WHEEL AND TIRES' },
        { id: 6, item: 'PARTS' },
        { id: 7, item: 'KEYS' },
    ]
    const MODELX = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'FLOOR MATS' },
        { id: 3, item: 'INTERIORS' },
        { id: 4, item: 'EXTERIORS' },
        { id: 5, item: 'WHEEL AND TIRES' },
        { id: 6, item: 'PARTS' },
        { id: 7, item: 'KEYS' },
    ]
    const MODELY = [
        { id: 1, item: 'BEST SELLERS' },
        { id: 2, item: 'FLOOR MATS' },
        { id: 3, item: 'INTERIORS' },
        { id: 4, item: 'EXTERIORS' },
        { id: 5, item: 'WHEEL AND TIRES' },
        { id: 6, item: 'PARTS' },
        { id: 7, item: 'KEYS' },
    ]


    return (
        <div className='main_accessories'>
            <div className='cyberTruck'>
                <Subtitle value='CYBERTRUCK' className='access_sub_value' />
                <AccessList value={CYBERTRUCK} />
            </div>
            <div className='models'>
                <Subtitle value='MODEL S' className='access_sub_value' />
                <AccessList value={MODELS} />
            </div>
            <div className='model3'>
                <Subtitle value='MODEL 3' className='access_sub_value' />
                <AccessList value={MODEL3} />
            </div>
            <div className='modelx'>
                <Subtitle value='MODEL X' className='access_sub_value' />
                <AccessList value={MODELX} />
            </div>
            <div className='modely'>
                <Subtitle value='MODEL Y' className='access_sub_value' />
                <AccessList value={MODELY} />
            </div>
            <div className='cyber_image'>
                <img src={Images.cyberCrossbar} alt="" />
                <p>CYBERTRUCK CROSSBARS</p>
            </div>
        </div>
    )
}

export default VehicleAccessories