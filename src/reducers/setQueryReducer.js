import constants from './../constants';
const { initialState, types } = constants;

const setQueryReducer = (state = initialState.queryTerm, action) => {
  let newArtistsByIdEntry;
  let newArtistsByIdStateSlice;
  let newMasterRecordListStateSlice;
  switch (action.type) {
  case types.SET_QUERY:
    return action.queryTerm;

  case types.REQUEST_ARTIST:
    newArtistsByIdEntry = {
      isFetching: true,
      queryTerm: action.queryTerm,
      artistId: action.artistId
    };
    newArtistsByIdStateSlice = Object.assign({}, state, {
      [action.artistId]: newArtistsByIdEntry
    });
    console.log(newArtistsByIdEntry);
    console.log(newArtistsByIdStateSlice);
    return newArtistsByIdStateSlice;

  case types.RECEIVE_ARTIST:
    newArtistsByIdEntry = Object.assign({}, state[action.artistId], {
      isFetching: false,
      artist: action.artistName,
      artistId: action.artistId
    });
    newArtistsByIdStateSlice = Object.assign({}, state, {
      [action.artistId]: newArtistsByIdEntry
    });
    return newArtistsByIdStateSlice;

  case types.SET_RECORDS:
    newMasterRecordListStateSlice = Object.assign({}, state, {
      masterRecordList: action.releases
    });

    return newMasterRecordListStateSlice;

  default:
    return state;
  }
};



export default setQueryReducer;
