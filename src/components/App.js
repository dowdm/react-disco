import React, { Component } from 'react'
import './App.css'
import ArtistSearch from './ArtistSearch'
import RecordList from './RecordList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
  }

  render() {
    let keys =Object.keys(this.state.masterRecordList);
    console.log(keys);
    let displayContent
    console.log(this.state.masterRecordList);
    if(keys.length > 0){
      displayContent =
        <RecordList masterRecordList={this.state.masterRecordList}/>
    } else {
      displayContent = <ArtistSearch/>
    }
    return (
      <div className="App">
        {displayContent}
      </div>
    )
  }
}

export default App
