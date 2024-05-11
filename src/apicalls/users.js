import { axiosInstance } from "./index";

export const RegisterUser = async (values) => {
  try {
    const response = await axiosInstance.post("api/users/register", values);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (values) => {
  try {
    const response = await axiosInstance.post("api/users/login", values);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("api/users/get-current-user");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
