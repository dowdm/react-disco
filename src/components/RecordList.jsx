import React from 'react'
import Record from './Record'
import { connect } from 'react-redux';

function RecordList(props){
  return (
    <div>
      <h1>Records by {props.queryTerm}</h1>
      {Object.keys(props.masterRecordList).map(function(recordId) {
        var record = props.masterRecordList[recordId]
        return  <Record
          imageUrl={record.imageUrl}
          albumName={record.albumName}
          key={recordId}
          recordId={recordId} />
      })}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    masterRecordList: state.masterRecordList
  };
};


export default connect(mapStateToProps)(RecordList);
