import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAlbumDetails, setDetails } from './../actions'

function SelectedRecord(props){
  const {dispatch} = props

  return (
    <div >
      <p onClick={() => dispatch(setDetails({}))}>Go Back</p>
      <p>{props.selectedRecordDetails.title}</p>
      <img src={props.selectedRecordDetails.images[0].uri} />
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(SelectedRecord)
