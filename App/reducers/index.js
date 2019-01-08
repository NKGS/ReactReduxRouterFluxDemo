import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import storeageAwareReducer from './storeageAwareReducer';

const appReducer = combineReducers({
    common: commonReducer,
    storeageAwareReducer: storeageAwareReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;