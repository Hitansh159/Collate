import * as api from "../api";

export const setLogin = async (payload, history) => {
  const { data } = await api.setLogin({ payload: payload });
  console.log(data);
  localStorage.setItem("userInfo", data);
  history.push("/");
};
