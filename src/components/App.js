import React, { Component } from 'react'
import './App.css'
import ArtistSearch from './ArtistSearch'
import RecordList from './RecordList'
import SelectedRecord from './SelectedRecord'
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    let keys = Object.keys(this.props.selectedRecordDetails);
    let displayContent
    console.log(this.state);
    if(keys.length > 0){
      displayContent =
      <SelectedRecord/>
    }
    else if(this.props.masterRecordList.length > 0){
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
    queryTerm: state.queryTerm,
    selectedRecordDetails: state.selectedRecordDetails
  };
};

export default connect(mapStateToProps)(App);
