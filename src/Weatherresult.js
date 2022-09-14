import React from 'react'

import './weather.css'


function weatherresult({date, mintemp, maxtemp, condition, icon}) {
  return (
    <div className="result">
    <h2>{Date}</h2>
    <ul>
        <li><img src={icon} alt="" /></li>
        <li>{condition}</li>
        <li>{mintemp} C / {maxtemp} C</li>
    </ul>
   </div>
  )
}

export default weatherresult