import * as api from "../api";

export const getFeeds = async () => {
  const payload = {
    email: "",
    query: "",
    tags: [],
  };

  if (localStorage.getItem("userInfo")) {
    payload.email = localStorage.getItem("userInfo").email;
  }

  const { body } = await api.fetchFeeds(payload);

  console.log(body);
  return body.data;
};
