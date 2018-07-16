import React from 'react'
import Record from './Record'

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

export default RecordList
