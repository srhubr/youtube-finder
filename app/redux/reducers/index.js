import { combineReducers } from 'redux';
import yearPageReducer from './yearPageReducer';
import locationPageReducer from './locationPageReducer';
import livePageReducer from './livePageReducer';

export default combineReducers({
  yearPage: yearPageReducer,
  locationPage: locationPageReducer,
  livePage: livePageReducer
});
