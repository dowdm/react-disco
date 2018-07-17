import React from 'react'
import Record from './Record'
import { connect } from 'react-redux';
import { setRecords } from './../actions';


function RecordList(props){
  const {dispatch} = props;
  console.log(props);
  console.log(dispatch)
  return (
    <div>
      <h1>Records by {props.queryTerm}</h1>
      <p onClick={() => dispatch(setRecords([]))}>Go Back</p>
      {props.masterRecordList.map(function(record) {
        return  <Record
          imageUrl={record.thumb}
          albumName={record.title}
          key={record.id}
          recordId={record.id} />
      })}
    </div>
  )
}
const mapStateToProps = state => {
  return  {
    masterRecordList: state.masterRecordList,
    queryTerm: state.queryTerm
  };
};


export default connect(mapStateToProps)(RecordList);
