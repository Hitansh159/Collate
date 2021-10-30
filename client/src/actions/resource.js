import * as api from "../api";

export const getFeeds = async () => {
  const payload = {
    email: "",
    query: "",
    tags: [],
  };

  if (localStorage.getItem("userInfo")) {
    console.log(JSON.parse(localStorage.getItem("userInfo")));
    payload.email = JSON.parse(localStorage.getItem("userInfo")).email;

    console.log("Hello");
  }

  const { data } = await api.fetchFeeds(payload);

  console.log(data);
  return data;
};
