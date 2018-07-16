import React, { Component } from 'react'
import './App.css'
import ArtistSearch from './ArtistSearch'
import RecordList from './RecordList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      queryTerm: null,
      masterRecordList: {
        1: {
          imageUrl: 'http://www.slate.com/content/dam/slate/articles/health_and_science/Science/2017/08/170803_MEDEX_SickDog.jpg.CROP.promo-xlarge2.jpg',
          albumName:'something else'
        },
        2: {
          imageUrl: 'http://www.slate.com/content/dam/slate/articles/health_and_science/Science/2017/08/170803_MEDEX_SickDog.jpg.CROP.promo-xlarge2.jpg',
          albumName:'something else'
        }
      }
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(queryTerm){
    this.state.queryTerm = queryTerm;
    console.log(this.state);
  }

  render() {
    let keys =Object.keys(this.state.masterRecordList);
    console.log(keys);
    let displayContent
    console.log(this.state);
    if(keys.length > 0){
      displayContent =
        <RecordList masterRecordList={this.state.masterRecordList} queryTerm={this.state.queryTerm}/>
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

export default App
