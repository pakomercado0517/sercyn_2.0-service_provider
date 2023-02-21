import {
  NEW_USER,
  LOGIN_USER,
  GET_USER,
  USER_LOGGED,
  DASHBOARD_NAME,
  GET_BOAT_BY_ID,
  NEW_BOAT,
} from "../actions";

const initialState = {
  newUser: [],
  login: [],
  user: [],
  dashboard_name: "",
  boatById: [],
  boat: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_USER:
      return {
        ...state,
        newUser: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        login: payload,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case USER_LOGGED:
      return {
        ...state,
        userLogged: payload,
      };
    case DASHBOARD_NAME:
      return {
        ...state,
        dashboard_name: payload,
      };
    case GET_BOAT_BY_ID:
      return {
        ...state,
        boatById: payload,
      };
    case NEW_BOAT:
      return {
        ...state,
        boat: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
