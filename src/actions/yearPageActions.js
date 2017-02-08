export const VIDEO_REQUEST_STARTED = 'VIDEO_REQUEST_STARTED';
export const VIDEO_REQUEST_FINISHED = 'VIDEO_REQUEST_FINISHED';

const videoRequestStarted = year => ({
  type: VIDEO_REQUEST_STARTED,
  year
});

const videoRequestFinished = (videoID, titles, publishDates) => ({
  type: VIDEO_REQUEST_FINISHED,
  videoID,
  titles,
  publishDates
});

export const getVideos = year => (dispatch) => {
  const endpoint = 'https://www.googleapis.com/youtube/v3/search?key={API_KEY}&';
  let options = 'part=snippet&type=video&maxResults=10&order=viewCount&';

  if (year === 'all time') {
    options += 'publishedAfter=2005-01-01T00:00:00Z&publishedBefore=2017-12-31T23:59:59Z';
  } else {
    options += `publishedAfter=${year}-01-01T00:00:00Z&publishedBefore=${year}-12-31T23:59:59Z`;
  }

  dispatch(videoRequestStarted(year));

  fetch(endpoint + options)
    .then(response => response.json())
    .then(data => {
      const videoID = [];
      const titles = [];
      const publishDates = [];

      data.items.forEach(item => {
        videoID.push(item.id.videoId);
        titles.push(item.snippet.title);
        publishDates.push(item.snippet.publishedAt.slice(0, 10));
      });

      return dispatch(videoRequestFinished(videoID, titles, publishDates));
    });
}
