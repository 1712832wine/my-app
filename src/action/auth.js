import api from "../api";
import { saveToken } from "../helper";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../const";

const loginAction = (data) => (dispatch) => {
  // notify login action start
  dispatch({
    type: LOGIN_START,
  });
  // call api login
  api
    .login(data)
    .then((res) => {
      const { data } = res;
      if (data.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: data.token,
            username: data.username,
          },
        });
        saveToken(data.token);
      } else {
        dispatch({
          type: LOGIN_FAILED,
          payload: {
            message: data.message,
          },
        });
      }
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          message: "Something went wrong!!",
        },
      });
    });
};

export { loginAction };
