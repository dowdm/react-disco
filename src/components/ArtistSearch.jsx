import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function ArtistSearch(){
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // dispatch(fetchSongId(input.value.trim()));
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

export default ArtistSearch
