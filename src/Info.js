import React from 'react'
import './info.css'

const Infopage = ({format,bit_rate,duration,size,start_time,nb_streams }) => {
  return (
    <div className = 'info'>
      <h4>Format: { format }</h4>
      {/* <h4>Bit Rate: { bit_rate }</h4>
      <h4>Duration in s: { duration }</h4>
      <h4>Size in Kb: { size }</h4>
      <h4>Start Time: { start_time }</h4>
      <h4>Number of Streams: { nb_streams }</h4> */}
    </div>
  )
}

export default Infopage
