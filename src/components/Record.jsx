import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAlbumDetails } from './../actions';

function Record(props){
  console.log(props);

  const {dispatch} = props;
  return (
    <div onClick={() => dispatch(fetchAlbumDetails(props.recordId))}>
      <img src={props.imageUrl}/>
      <p>{props.albumName}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return state;
};



export default connect(mapStateToProps)(Record);
