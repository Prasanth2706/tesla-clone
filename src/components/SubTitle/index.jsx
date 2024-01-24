import React from 'react'
import './subtitle.css'

const Subtitle = ({ value, className }) => {
  return (
    <div className={className === 'cart_subvalue' ? 'cart_subvalue' : 'subtitle'} >
      <p className={className === 'access_sub_value' ? 'access_sub_value' : className === 'cart_subvale' ? 'cart_subvalue' : 'sub_value'}>{value}</p>
    </div >
  )
}

export default Subtitle