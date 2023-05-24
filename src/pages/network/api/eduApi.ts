import { apiClient } from "../apiClient";

const serviceType = "TBordCont5";

export const requestEduPrograms = async () => {
  try {
    return (await apiClient.get(`/${serviceType}/1/5`)).data;
  } catch (error) {
    console.error(error);
  }
};
