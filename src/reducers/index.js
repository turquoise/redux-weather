import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import reducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  form: formReducer,
  weather: reducerWeather

});

export default rootReducer;
