import React from 'react'
import PropTypes from 'prop-types'

function Record(props){
  return (
    <div>
      <img src={props.imageUrl}/>
      <p>{props.albumName}</p>
    </div>
  )
}



export default Record
