import axios from "axios";

axios.defaults.baseURL = "https://reqres.in";

export default {
  login: (credentials) =>
    axios.post("/api/login", credentials).then(({ data: token }) => token),

  getUsers: () => axios.get("/api/users").then(({ data }) => data.data),

  getUser: (id) =>
    axios.get(`/api/users/${id}`).then(({ data: user }) => user.data),

  updateUser: (id, user) => axios.put(`/api/users/${id}`, user),

  deleteUser: (id) => axios.delete(`/api/users/${id}`),
};
