import { SET_LATITUDE } from '../actions/locationPageActions';
import { SET_LONGITUDE } from '../actions/locationPageActions';
import { VIDEO_REQUEST_STARTED1 } from '../actions/locationPageActions';
import { VIDEO_REQUEST_FINISHED1 } from '../actions/locationPageActions';

const initialState = {
  lat: 50.454,
  lng: 30.525,
  rad: 50,
  timeAfter: `2012-01-01T00:00:00Z`,
  timeBefore: `2016-12-31T00:00:00Z`,
  order: 'view count',
  videoID1: [],
  titles1: [],
  thumbnails: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_LATITUDE:
      return Object.assign({}, state, { lat: action.lat });
    case SET_LONGITUDE:
      return Object.assign({}, state, { lng: action.lng });
    case VIDEO_REQUEST_STARTED1:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
        rad: action.rad,
        timeAfter: action.timeAfter,
        timeBefore: action.timeBefore,
        order: action.order
      });
    case VIDEO_REQUEST_FINISHED1:
      return Object.assign({}, state, { videoID1: action.videoID1, titles1: action.titles1, thumbnails: action.thumbnails });
    default:
      return state;
  }
}
