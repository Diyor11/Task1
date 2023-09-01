import { AuthActionType } from './actions';
import * as actionTypes from './types';

export type AuthStateType = {
    current: {} | null,
    loading: boolean,
    isLoggedIn: boolean
}

const INITIAL_STATE = {
  current: {},
  loading: false,
  isLoggedIn:  window.localStorage.getItem('isLoggedIn') || false,
};

const authReducer = (state = INITIAL_STATE, action: AuthActionType) => {
  switch (action.type) {
    case actionTypes.LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FAILED_REQUEST:
      return INITIAL_STATE;

    case actionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default authReducer;
