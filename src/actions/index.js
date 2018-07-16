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

export const receiveArtist = (queryTerm, artistId) => ({
  type: types.REQUEST_ARTIST,
  queryTerm,
  artistId: artistId
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
        console.log(json)
      // if (json.message.body.track_list.length > 0) {
      //   const musicMatchId = json.message.body.track_list[0].track.track_id;
      //   const artist = json.message.body.track_list[0].track.artist_name;
      //   const title = json.message.body.track_list[0].track.track_name;
      //   fetchLyrics(title, artist, musicMatchId, localSongId, dispatch);
      // } else {
      //   console.log('We couldn\'t locate a song under that ID!');
      // }
    });
  };
}
