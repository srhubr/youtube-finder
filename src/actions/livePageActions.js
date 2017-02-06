export const VIDEO_REQUEST_STARTED2 = 'VIDEO_REQUEST_STARTED2',
             VIDEO_REQUEST_FINISHED2 = 'VIDEO_REQUEST_FINISHED2',
             CHANGE_ACTIVE_NAV_KEY = 'CHANGE_ACTIVE_NAV_KEY';

function videoRequestStarted2(videoCategoryId) {
  return { type: VIDEO_REQUEST_STARTED2, videoCategoryId };
}

function videoRequestFinished2(videoID2, titles2, thumbnails1) {
  return { type: VIDEO_REQUEST_FINISHED2, videoID2, titles2, thumbnails1 }
}

export function changeActiveNavKey(activeNavKey) {
  return { type: CHANGE_ACTIVE_NAV_KEY, activeNavKey }
}

export function getVideos2(eventType, videoCategoryId) {
  const videoID2 = [],
        titles2 = [],
        thumbnails1 = [];

  return (dispatch) => {
    dispatch(videoRequestStarted2(videoCategoryId));

    let endpoint = `https://www.googleapis.com/youtube/v3/search?` +
                   `key=AIzaSyDd3QGZaj-bTDmV7pfJHhn5uSLCaX1UPC8&` +
                   `part=snippet&type=video&maxResults=30&` +
                   `order=viewCount&eventType=${eventType}`;

    if (videoCategoryId) endpoint += `&videoCategoryId=${videoCategoryId}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        data.items.forEach(item => {
          videoID2.push(item.id.videoId);
          titles2.push(item.snippet.title);
          thumbnails1.push(item.snippet.thumbnails.medium.url);
        });

        return dispatch(videoRequestFinished2(videoID2, titles2, thumbnails1));
      })
  }
}
