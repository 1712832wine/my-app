import axios from "axios";
let api = {
  // auth
  login: (data) => {
    return axios.post("http://localhost:8080/api/auth/login", data);
  },
};
export default api;
