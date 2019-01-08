import * as types from '../actions/actionTypes';

const initialState = {
    isLoggedIn:false
};

export default function commonReducer(state = initialState, action) {
    switch(action.type){
        case types.CHANGE_STATE:{
            return {...state, isLoggedIn:action.payload}
        }
        break;
        default: {
            return state;
        }
    }
    return state;
}