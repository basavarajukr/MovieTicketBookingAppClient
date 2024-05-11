const { axiosInstance } = require(".");

export const addTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "api/theatres/add-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "api/theatres/update-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.delete("api/theatres/delete-theatre", {
      data: payload,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllTheatresForAdmin = async () => {
  try {
    const response = await axiosInstance.get("api/theatres/get-all-theatres");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllTheatres = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "api/theatres/get-all-theatres-by-owner",
      { params: payload }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
