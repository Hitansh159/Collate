import * as api from "../api";

export const setLogin = async (payload, history) => {
  console.log("Hello1");
  const response = await api.setLogin({ payload: payload });
  console.log("Hello2", response);
  history.push("/");
};
