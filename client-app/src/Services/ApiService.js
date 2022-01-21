import axios from "axios";

axios.defaults.baseURL = "/api";

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then().then(responseBody),
  post: (url, body) => axios.post(url, body).then().then(responseBody),
  put: (url, body) => axios.put(url, body).then().then(responseBody),
  patch: (url, body) => axios.patch(url, body).then().then(responseBody),
  del: (url) => axios.delete(url).then().then(responseBody),
};

const User = {
  getAllUsers: () => requests.get("/users/"),
  loginUser: (test) => requests.post("/users/login", test),
  createUser: (user) => requests.post(`/users/create-user`, user)
};

export default class ApiService {

  async register(user) {
    const data = await User.createUser(user)
      .then((responce) => {
        return {
          data: responce
        }
      }).catch(error => {
        return error.response;
      })
    return data;
  }

  async getAllUsers() {
    const data = await User.getAllUsers()
      .then((response) => {
        return { data: response };
      })
      .catch((error) => {
        return error.response;
      });
    return data;
  }

  async loginUser(userData) {
    const data = await User.loginUser(userData)
      .then((response) => {
        return { data: response };
      })
      .catch((error) => {
        return error.response;
      });
    return data;
  }
}
