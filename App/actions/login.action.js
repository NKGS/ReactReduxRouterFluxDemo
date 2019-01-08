import * as types from './actionTypes';

export function changeState(loggedInState){
    return {
      type: types.CHANGE_STATE,
      payload : loggedInState
    };
}