import React from 'react'
import './subtitle.css'

const Subtitle = ({value}) => {
  return (
    <div className='subtitle'>
        <p className='sub_value'>{value}</p>
    </div>
  )
}

export default Subtitle