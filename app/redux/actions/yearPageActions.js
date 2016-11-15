export const VIDEO_REQUEST_STARTED = 'VIDEO_REQUEST_STARTED';
export const VIDEO_REQUEST_FINISHED = 'VIDEO_REQUEST_FINISHED';

function videoRequestStarted(year) {
  return { type: VIDEO_REQUEST_STARTED, year };
}

function videoRequestFinished(videoID, titles, publishDates) {
  return { type: VIDEO_REQUEST_FINISHED, videoID, titles, publishDates };
}

export function getVideos(year) {
  let requestParams = {};
  let videoID = [],
      titles = [],
      publishDates = [];
  return (dispatch) => {
    dispatch(videoRequestStarted(year));

    if(year == 'all time') {
      requestParams = {
        part: "snippet",
        maxResults: 10,
        order: "viewCount",
        type: "video",
        publishedAfter: `2005-01-01T00:00:00Z`,
        publishedBefore: `2017-12-31T23:59:59Z`
      };
    } else {
      requestParams = {
        part: "snippet",
        maxResults: 10,
        order: "viewCount",
        type: "video",
        publishedAfter: `${year}-01-01T00:00:00Z`,
        publishedBefore: `${year}-12-31T23:59:59Z`
      };
    }

    YoutubeClient.search(requestParams, function (err, results) {
      if(err) return console.log(err);

      results.items.forEach(function(item, index, arr) {
        videoID.push(item.id.videoId);
        titles.push(item.snippet.title);
        publishDates.push(item.snippet.publishedAt.slice(0, 10));
      });

      return dispatch(videoRequestFinished(videoID, titles, publishDates));

    });

  };
}
