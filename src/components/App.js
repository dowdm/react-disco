import React, { Component } from 'react'
import './App.css'
import ArtistSearch from './ArtistSearch'
import RecordList from './RecordList'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  // handleSearch(queryTerm){
  //   this.props.queryTerm = queryTerm;
  // }

  render() {
    let keys =Object.keys(this.state.masterRecordList);
    console.log(keys);
    let displayContent
    console.log(this.state);
    if(keys.length > 0){
      displayContent =
        <RecordList masterRecordList={this.props.masterRecordList} queryTerm={this.props.queryTerm}/>
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
