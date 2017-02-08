export const SET_LATITUDE = 'SET_LATITUDE';
export const SET_LONGITUDE = 'SET_LONGITUDE';
export const VIDEO_REQUEST_STARTED1 = 'VIDEO_REQUEST_STARTED1';
export const VIDEO_REQUEST_FINISHED1 = 'VIDEO_REQUEST_FINISHED1';

export const setLatitude = lat => ({
  type: SET_LATITUDE,
  lat
});

export const setLongitude = lng => ({
  type: SET_LONGITUDE,
  lng
});

const videoRequestStarted1 = (lat, lng, rad, timeAfter, timeBefore, order) => ({
  type: VIDEO_REQUEST_STARTED1,
  lat,
  lng,
  rad,
  timeAfter,
  timeBefore,
  order
});

export const videoRequestFinished1 = (videoID1, titles1, thumbnails) => ({
  type: VIDEO_REQUEST_FINISHED1,
  videoID1,
  titles1,
  thumbnails
});

export const getVideos1 = (lat, lng, rad, timeAfter, timeBefore, order) => (dispatch) => {
  const endpoint = 'https://www.googleapis.com/youtube/v3/search?key={API_KEY}&';
  const options = `part=snippet&type=video&maxResults=30&order=${order}&location=${lat},${lng}&` +
                  `locationRadius=${rad}km&publishedAfter=${timeAfter}&publishedBefore=${timeBefore}`;

  dispatch(videoRequestStarted1(lat, lng, rad, timeAfter, timeBefore, order));

  fetch(endpoint + options)
    .then(response => response.json())
    .then(data => {
      const videoID1 = [];
      const titles1 = [];
      const thumbnails = [];

      data.items.forEach(item => {
        videoID1.push(item.id.videoId);
        titles1.push(item.snippet.title);
        thumbnails.push(item.snippet.thumbnails.medium.url);
      });

      return dispatch(videoRequestFinished1(videoID1, titles1, thumbnails));
    });
}
