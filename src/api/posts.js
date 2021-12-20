import axios from "axios";
import { ROOT_URL } from "./index";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${ROOT_URL}/posts`);
    return response;
  } catch (error) {
    console.error(error);
  }
};