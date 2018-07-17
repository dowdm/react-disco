import React, { Component } from 'react'
import './App.css'
import ArtistSearch from './ArtistSearch'
import RecordList from './RecordList'
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    let keys = Object.keys(this.props.masterRecordList);
    let displayContent
    console.log(this.state);
    if(keys.length > 0){
      displayContent =
        <RecordList/>
    } else {
      displayContent = <ArtistSearch onSearch={this.handleSearch}/>
    }
    return (
      <div className="App">
        {displayContent}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterRecordList: state.masterRecordList,
    queryTerm: state.queryTerm
  };
};

export default connect(mapStateToProps)(App);
