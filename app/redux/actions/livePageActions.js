export const VIDEO_REQUEST_STARTED2 = 'VIDEO_REQUEST_STARTED2';
export const VIDEO_REQUEST_FINISHED2 = 'VIDEO_REQUEST_FINISHED2';
export const CHANGE_ACTIVE_NAV_KEY = 'CHANGE_ACTIVE_NAV_KEY';

function videoRequestStarted2(eventType, videoCategoryId) {
  return { type: VIDEO_REQUEST_STARTED2, eventType, videoCategoryId };
}

function videoRequestFinished2(videoID2, titles2, thumbnails1) {
  return { type: VIDEO_REQUEST_FINISHED2, videoID2, titles2, thumbnails1 }
}

export function changeActiveNavKey(activeNavKey) {
  return { type: CHANGE_ACTIVE_NAV_KEY, activeNavKey }
}

export function getVideos2(eventType, videoCategoryId) {
  let requestParams = {};
  let videoID2 = [],
      titles2 = [],
      thumbnails1 = [];
  return (dispatch) => {
    dispatch(videoRequestStarted2(eventType, videoCategoryId));

    if(videoCategoryId == undefined) {
      requestParams = {
        part: "snippet",
        maxResults: 20,
        order: "viewCount",
        type: "video",
        eventType: eventType
      };
    } else {
      requestParams = {
        part: "snippet",
        maxResults: 20,
        order: "viewCount",
        type: "video",
        eventType: 'completed',
        videoCategoryId: videoCategoryId
      };
    }

    YoutubeClient.search(requestParams, function (err, results) {
      if(err) return console.log(err);

      results.items.forEach(function(item, index, arr) {
        videoID2.push(item.id.videoId);
        titles2.push(item.snippet.title);
        thumbnails1.push(item.snippet.thumbnails.medium.url);
      });

      return dispatch(videoRequestFinished2(videoID2, titles2, thumbnails1));

    });
  }
}
