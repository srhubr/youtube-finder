export const VIDEO_REQUEST_STARTED2 = 'VIDEO_REQUEST_STARTED2';
export const VIDEO_REQUEST_FINISHED2 = 'VIDEO_REQUEST_FINISHED2';
export const CHANGE_ACTIVE_NAV_KEY = 'CHANGE_ACTIVE_NAV_KEY';

const videoRequestStarted2 = videoCategoryId => ({
  type: VIDEO_REQUEST_STARTED2,
  videoCategoryId
});

const videoRequestFinished2 = (videoID2, titles2, thumbnails1) => ({
  type: VIDEO_REQUEST_FINISHED2,
  videoID2,
  titles2,
  thumbnails1
});

export const changeActiveNavKey = activeNavKey => ({
  type: CHANGE_ACTIVE_NAV_KEY,
  activeNavKey
});

export const getVideos2 = (eventType, videoCategoryId) => (dispatch) => {
  const endpoint = 'https://www.googleapis.com/youtube/v3/search?key={API_KEY}&';
  let options = `part=snippet&type=video&maxResults=30&order=viewCount&eventType=${eventType}&`;

  if (videoCategoryId) options += `videoCategoryId=${videoCategoryId}`;

  dispatch(videoRequestStarted2(videoCategoryId));

  fetch(endpoint + options)
    .then(response => response.json())
    .then(data => {
      const videoID2 = [];
      const titles2 = [];
      const thumbnails1 = [];

      data.items.forEach(item => {
        videoID2.push(item.id.videoId);
        titles2.push(item.snippet.title);
        thumbnails1.push(item.snippet.thumbnails.medium.url);
      });

      return dispatch(videoRequestFinished2(videoID2, titles2, thumbnails1));
    })
}
