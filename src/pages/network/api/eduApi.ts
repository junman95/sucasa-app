import { apiClient } from "../apiClient";

export const eduServiceCode = "TBordCont5";

type EduProgram = {
  TITL_NM: string;
  CONT: string;
  REG_DT: string;
};
export interface EduResponse {
  statusCode: number;
  data: { TBordCont5: {row:EduProgram[]} };
}

export const requestEduPrograms = async (): Promise<EduResponse> => {
  return await apiClient.get(`/${eduServiceCode}/1/5`);
  // } catch (error) {
  //   console.error(error);
  //   return Error("error");
  // }
};
