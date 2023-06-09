import { EduProgram } from "../../features/eduTable/type";
import { apiClient } from "../apiClient";

const urlPath = process.env.REACT_APP_API_URL;
const dataType = "json";
const baseUrl = urlPath + "/" + dataType;

export const eduServiceCode = "TBordCont5";

export interface EduResponse {
  statusCode: number;
  data: { TBordCont5: { row: EduProgram[] } };
}

export const requestEduPrograms = async (): Promise<EduResponse> => {
  const res = await fetch(`${baseUrl}/${eduServiceCode}/1/100`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("error");
  }

  return await res.json();
  // return await apiClient.get(`/${eduServiceCode}/1/100`);
  // } catch (error) {
  //   console.error(error);
  //   return Error("error");
  // }
};
