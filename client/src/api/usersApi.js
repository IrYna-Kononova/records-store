import axios from "axios";

export const signup = async (usersDispatch, formData) => {
  try {
    const response = await axios.post("/users/register", formData);

    usersDispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usersDispatch, formData) => {
  try {
    const response = await axios.post("/users/login", formData);

    usersDispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (usersDispatch) => {
  try {
    await axios.get("/users/logout");
    usersDispatch({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};

export const getMyData = async (usersDispatch) => {
  try {
    const response = await axios.get("/users/me");

    if (response.data && response.data.isAuthenticated) {
      usersDispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
};
