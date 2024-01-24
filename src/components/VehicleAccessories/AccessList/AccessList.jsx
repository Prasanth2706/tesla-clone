import React from 'react'
import './accessList.css'

const AccessList = ({ value }) => {
  return (
    <div className='access_list'>
      {value.map((item) =>
        <ul>
          <li key={item.id}>{item.item}</li>
        </ul>
      )}
    </div>
  )
}

export default AccessList