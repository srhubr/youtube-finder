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
  let requestParams = {};
  let videoID1 = [],
      titles1 = [],
      thumbnails = [];
  return (dispatch) => {
    dispatch(videoRequestStarted1(lat, lng, rad, timeAfter, timeBefore, order));

    requestParams = {
      part: "snippet",
      maxResults: 50,
      order: `${order}`,
      type: "video",
      location: `${lat},${lng}`,
      locationRadius: `${rad}km`,
      publishedAfter: timeAfter,
      publishedBefore: timeBefore
    };

    YoutubeClient.search(requestParams, function (err, results) {
      if(err) return console.log(err);

      results.items.forEach(function(item, index, arr) {
        videoID1.push(item.id.videoId);
        titles1.push(item.snippet.title);
        thumbnails.push(item.snippet.thumbnails.medium.url);
      });

      return dispatch(videoRequestFinished1(videoID1, titles1, thumbnails));

    });

  };
}
