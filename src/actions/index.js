import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const setQueryTerm = (queryTerm) => ({
  type: types.SET_QUERY,
  queryTerm
});

export const requestArtist = (queryTerm, localArtistId) => ({
  type: types.REQUEST_ARTIST,
  queryTerm,
  artistId: localArtistId
});

export const receiveArtist = (artistName, artistId) => ({
  type: types.RECEIVE_ARTIST,
  artistName,
  artistId: artistId
});

export const setRecords = (releases) => ({
  type: types.SET_RECORDS,
  releases
});

export const requestDetails = (recordId) => ({
  type: types.REQUEST_ARTIST,
  recordId: recordId
});

export const receiveDetails = (recordId) => ({
  type: types.RECEIVE_DETAILS,
  recordId: recordId
});

export const setDetails = (details) => ({
  type: types.SET_DETAILS,
  details
});

export function fetchArtistId(queryTerm) {
  return function (dispatch) {
    const localArtistId = v4();
    dispatch(requestArtist(queryTerm, localArtistId));
    queryTerm = queryTerm.replace(' ', '_');
    return fetch('https://api.discogs.com/database/search?q='+queryTerm+'&token=API-KEY').then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    ).then(function(json) {
      console.log(json);
      console.log(json.results[0].id)
      if (json.results[0].id > 0) {
        const discogsArtistId = json.results[0].id;
        const artistName = json.results[0].title;
        fetchReleases(artistName, discogsArtistId, localArtistId, dispatch);
        console.log('hey!');
      } else {
        console.log('We couldn\'t locate a song under that ID!');
      }
    }, error => console.log('An error occured' + error));
  };
}

export function fetchReleases(artistName, discogsArtistId, localArtistId, dispatch) {
  let discogsArtistIdString = discogsArtistId.toString();
  return fetch('https://api.discogs.com/artists/'+ discogsArtistId +'/releases?&token=API-KEY').then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(j){
    console.log(j);
    console.log(j.releases);
    if (j.releases.length > 0) {
      let releases = j.releases;
      dispatch(receiveArtist(artistName, localArtistId));
      dispatch(setRecords(releases));

    } else {
      console.log('We couldn\'t locate this artist!');
    }
  });
}

export function fetchAlbumDetails(recordId) {
  return function (dispatch) {
    let recordIdString = recordId.toString();
    return fetch('https://api.discogs.com/releases/' + recordIdString + '?token=API-KEY').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(j){
      if (j) {
        dispatch(receiveDetails(recordId));
        dispatch(setDetails(j));
      } else {
        console.log('We couldn\'t locate details for this record!');
      }
    });
  }
}
