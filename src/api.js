import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const getReports = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/admin/reports`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/v1/admin/deletePost/${postId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
