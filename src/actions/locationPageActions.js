export const SET_LATITUDE = 'SET_LATITUDE';
export const SET_LONGITUDE = 'SET_LONGITUDE';
export const VIDEO_REQUEST_STARTED1 = 'VIDEO_REQUEST_STARTED1';
export const VIDEO_REQUEST_FINISHED1 = 'VIDEO_REQUEST_FINISHED1';

export function setLatitude(lat) {
  return { type: SET_LATITUDE, lat }
}

export function setLongitude(lng) {
  return { type: SET_LONGITUDE, lng }
}

function videoRequestStarted1(lat, lng, rad, timeAfter, timeBefore, order) {
  return { type: VIDEO_REQUEST_STARTED1, lat, lng, rad, timeAfter, timeBefore, order };
}

export function videoRequestFinished1(videoID1, titles1, thumbnails) {
  return { type: VIDEO_REQUEST_FINISHED1, videoID1, titles1, thumbnails }
}

export function getVideos1(lat, lng, rad, timeAfter, timeBefore, order) {
  let videoID1 = [],
      titles1 = [],
      thumbnails = [];

  return (dispatch) => {
    dispatch(videoRequestStarted1(lat, lng, rad, timeAfter, timeBefore, order));

    let endpoint = `https://www.googleapis.com/youtube/v3/search?` +
                   `key=AIzaSyDd3QGZaj-bTDmV7pfJHhn5uSLCaX1UPC8&` +
                   `part=snippet&type=video&maxResults=30&` +
                   `order=${order}&location=${lat},${lng}&locationRadius=${rad}km&` +
                   `publishedAfter=${timeAfter}&publishedBefore=${timeBefore}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        data.items.forEach(function(item, index, arr) {
          videoID1.push(item.id.videoId);
          titles1.push(item.snippet.title);
          thumbnails.push(item.snippet.thumbnails.medium.url);
        });

        return dispatch(videoRequestFinished1(videoID1, titles1, thumbnails));
      });
  };
}
