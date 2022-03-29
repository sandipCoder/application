import Api from "./api";

export default {
  user() {
    return Api.get("users");
  },

  newUser(data) {
    return Api.post("users/", data);
  },
};
