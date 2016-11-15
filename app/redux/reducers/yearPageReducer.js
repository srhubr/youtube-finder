import { VIDEO_REQUEST_STARTED, VIDEO_REQUEST_FINISHED } from '../actions/yearPageActions';

const initialState = {
  year: '',
  videoID: [],
  titles: [],
  publishDates: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VIDEO_REQUEST_STARTED:
      return Object.assign({}, state, { year: action.year });
    case VIDEO_REQUEST_FINISHED:
      return Object.assign({}, state, {
        videoID: action.videoID,
        titles: action.titles,
        publishDates: action.publishDates
      });
    default:
      return state;
  }
}
