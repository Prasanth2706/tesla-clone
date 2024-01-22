import React, { useState } from 'react'
import ChargerHeader from '/home/cepl/tesla-clone/src/components/Header/index.jsx'
import Subtitle from '../../components/SubTitle'
import './chargerbody.css';
import { useSelector } from 'react-redux';
import { Images } from '../../images';
import { selectCharger } from '../../features/Car/Charging/ChargingSlice';
import { selectPart } from '../../features/Car/Charging/parts';

const ChargerBody = () => {
  const [hoverChargerID, sethoverChargerID] = useState(null)
  const [hoverPartsId, setHoverPartId] = useState(null);
  const chargers = useSelector(selectCharger)
  const parts = useSelector(selectPart)

  const handleChargerHover = (id) => {
    sethoverChargerID(id)
  }

  const handleChargerLeave = () => {
    sethoverChargerID(null)
  }

  const handlePartHover = (id) => {
    setHoverPartId(id)
  }

  const handlePartLeave = () => {
    setHoverPartId(null)
  }

  return (
    <>
      <ChargerHeader />
      <div className='join_wrap'>
        <div className='main_heading'>
          <p>CHARGING</p>
        </div>
        <div className='main_subtitle'>
          <Subtitle value='CHARGERS' />
        </div>
        <div className='main_content'>
          {chargers && chargers.map((charger, index) =>
            <div key={index} className='charger_info' onMouseOver={() => handleChargerHover(charger.id)} onMouseLeave={() => handleChargerLeave()}>
              <div className='charger_image' >
                <img className='chargers_image' src={hoverChargerID === charger.id ? charger.hoverImage : charger.images} alt="" />
              </div>
              <div className='charger_content'>
                <div className='charger_name'>
                  <p>{charger.name}</p>
                </div>
                <div className='charger_price'>
                  <p >{charger.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='main_subtitle_part'>
          <Subtitle value='PARTS' />
        </div>
        <div className='main_content'>
          {parts && parts.map((part, index) =>
            <div key={index} className='charger_info' onMouseOver={() => handlePartHover(part.id)} onMouseLeave={() => handlePartLeave(part.id)}>
              <div className='charger_image'>
                <img className='chargers_image' src={hoverPartsId === part.id && part.hoverImage ? part.hoverImage : part.images} alt="" />
              </div>
              <div className='charger_content'>
                <div className='charger_name'>
                  <p>{part.name}</p>
                </div>
                <div className='charger_price'>
                  <p >{part.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='footer_part'>
        <div className='footer_left_section'>
          <p>TESLA</p>
          <p>@</p>
          <span>2024</span>
        </div> <div className='footer_middle_section'>
          <p>PRIVACY</p>
          <p>&</p>
          <span>LEGAL</span>
        </div> <div className='footer_right_section'>
          <p>LOCATIONS</p>
        </div>
      </div>
    </>
  )
}

export default ChargerBody