import axios from "axios";
import auth from "./auth";

const getUsers = () => {
  return axios.get("/users", { headers: auth() });
};

export default getUsers;
