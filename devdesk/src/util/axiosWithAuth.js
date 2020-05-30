import axios from "axios";

function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://devdeskqueue-api.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
}

export default axiosWithAuth;
