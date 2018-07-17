import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setQueryTerm, fetchArtistId } from './../actions';

function ArtistSearch({ dispatch }){
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(setQueryTerm(input.value));
        dispatch(fetchArtistId(input.value.trim()));

        input.value = ''
      }}>
        <input placeholder="Artist Name" ref={node => {
          input = node
        }}></input>
        <button>Search</button>
      </form>
    </div>
  )
}

ArtistSearch.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(ArtistSearch);
