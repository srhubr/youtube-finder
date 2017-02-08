import {
  VIDEO_REQUEST_STARTED2,
  VIDEO_REQUEST_FINISHED2,
  CHANGE_ACTIVE_NAV_KEY
} from '../actions/livePageActions';

const initialState = {
  eventType: 'live',
  activeNavKey: '1',
  videoCategoryId: '',
  videoID2: [],
  titles2: [],
  thumbnails1: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_REQUEST_STARTED2:
      return Object.assign({}, state, { videoCategoryId: action.videoCategoryId });

    case VIDEO_REQUEST_FINISHED2:
      return Object.assign({}, state, {
        videoID2: action.videoID2,
        titles2: action.titles2,
        thumbnails1: action.thumbnails1
      });

    case CHANGE_ACTIVE_NAV_KEY:
      return Object.assign({}, state, { activeNavKey: action.activeNavKey });

    default:
      return state;
  }
}
