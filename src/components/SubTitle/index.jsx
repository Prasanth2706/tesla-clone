import React from 'react'
import './subtitle.css'

const Subtitle = ({ value, className }) => {
  return (
    <div className='subtitle'>
      <p className={className ? 'access_sub_value' : 'sub_value'}>{value}</p>
    </div>
  )
}

export default Subtitle