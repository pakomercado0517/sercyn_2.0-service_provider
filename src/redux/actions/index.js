import axios from "axios";

const { REACT_APP_BACKEND } = process.env;

const constants = {
  localhost: REACT_APP_BACKEND,
};

export const NEW_USER = "NEW_USER";
export const LOGIN_USER = "LOGIN_USER";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const USER_LOGGED = "USER_LOGGED";
export const DASHBOARD_NAME = "DASHBOARD_NAME";
export const GET_BOAT_BY_ID = "GET_BOAT_BY_ID";
export const NEW_BOAT = "NEW_BOAT";

export const newUser = (data) => async (dispatch) => {
  const createUser = await axios.post(
    `${constants.localhost}/user/signup`,
    data
  );
  try {
    dispatch({
      type: NEW_USER,
      payload: createUser.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const loginUser = (data) => async (dispatch) => {
  const user = await axios.post(`${constants.localhost}/user/login`, data);
  try {
    window.localStorage.setItem("userLogged", JSON.stringify(user, data));
  } catch (error) {
    console.log(error.response);
  }
};

export const getUser = (id, token) => async (dispatch) => {
  const user = await axios.get(`${constants.localhost}/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  try {
    dispatch({
      type: GET_USER,
      payload: user.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateUser = (data, token) => async (dispatch) => {
  console.log("data", data);
  const user = await axios.put(
    `${constants.localhost}/user/update/${data.id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  try {
    dispatch({
      type: UPDATE_USER,
      payload: user.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserLogged = (user) => (dispatch) => {
  dispatch({
    type: USER_LOGGED,
    payload: user,
  });
};

export const dashboardName = (name) => (dispatch) => {
  dispatch({
    type: DASHBOARD_NAME,
    payload: name,
  });
};

export const getBoatById = (id) => async (dispatch) => {
  const boatId = await axios.get(`${constants.localhost}/boat/${id}`);
  try {
    dispatch({
      type: GET_BOAT_BY_ID,
      payload: boatId.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

//The ID is than the Company.id
export const newBoat = (data) => async (dispatch) => {
  const boat = await axios.post(`${constants.localhost}/boat/${data.id}`, data);
  try {
    dispatch({
      type: NEW_BOAT,
      payload: boat.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
