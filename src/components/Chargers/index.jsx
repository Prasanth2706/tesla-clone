import React from 'react'
import './chargers.css'
import { Images } from '../../images'
import Subtitle from '../SubTitle'

const Chargers = () => {
    return (
        <div className='charger_section'>
            <div className='charger_types'>
                <Subtitle value='CHARGERS' className='access_sub_value' />
                <Subtitle value='ADAPTERS' className='access_sub_value' />
                <Subtitle value='PARTS' className='access_sub_value' />

            </div>
            <div className='charger_container'>
                <img className='charger_image' src={Images.wallconnector3} alt="" />
                <p>WALL CONNECTOR</p>
            </div>

        </div>
    )
}

export default Chargers