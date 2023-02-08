export default getUser = () => {
  return axios.get("/users", { headers: auth() });
};
