import axios from "axios";

const urlPath = process.env.NEXT_PUBLIC_API_URL
const dataType = "json";
export const apiClient = axios.create({
  baseURL: urlPath + '/' + dataType,
});
