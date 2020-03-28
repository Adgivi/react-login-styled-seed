import axios from "axios";

axios.defaults.baseURL = "https://reqres.in";

export default {
  login: (credentials) =>
    axios.post("/api/login", credentials).then(({ data: token }) => token),
};
