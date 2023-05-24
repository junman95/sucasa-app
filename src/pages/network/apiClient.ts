import axios from "axios";

const urlPath = process.env.REACT_APP_API_URL
const dataType = "json";
export const apiClient = axios.create({
  baseURL: urlPath + '/' + dataType,
});
