import { EduProgram } from "../../features/eduTable/type";
import { apiClient } from "../apiClient";

const urlPath = process.env.NEXT_PUBLIC_API_URL;
const dataType = "json";
const baseUrl = urlPath + "/" + dataType;

export const eduServiceCode = "TBordCont5";

export interface EduData {
  row: EduProgram[];
}

export const requestEduPrograms = async (): Promise<EduData> => {
  const res = await fetch(`${baseUrl}/${eduServiceCode}/1/100`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  console.log(res);

  if (!res.ok) {
    throw new Error("error");
  }

  return await res.json().then((data) => data[eduServiceCode]);
};
