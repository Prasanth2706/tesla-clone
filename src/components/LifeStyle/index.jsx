import React from 'react'
import Subtitle from '../SubTitle'
import { Images } from '../../images'
import './lifestyle.css'


const LifeStyle = () => {
    return (
        <div className='main_lifestyle'>
            <div className='life_style_leftsection'>
                <Subtitle value='BESTSELLERS' className='access_sub_value' />
                <Subtitle value='BAGS' className='access_sub_value' />
                <Subtitle value='DRINKWARE' className='access_sub_value' />
                <Subtitle value='MINI TESLAS' className='access_sub_value' />
                <Subtitle value='OUTDOOR & TECH' className='access_sub_value' />
                <Subtitle value='GIFTCARD' className='access_sub_value' />
            </div>
            <div className='lifestyle_rightsection'>
                <img src={Images.cyberquad} alt="" />
                <p className='cyber_kids'>CYBERTRUCK FOR KIDS</p>
            </div>
        </div>
    )
}

export default LifeStyle