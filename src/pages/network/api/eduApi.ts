import { EduProgram } from "../../../features/eduTable/type";
import { apiClient } from "../apiClient";

export const eduServiceCode = "TBordCont5";

export interface EduResponse {
  statusCode: number;
  data: { TBordCont5: { row: EduProgram[] } };
}

export const requestEduPrograms = async (): Promise<EduResponse> => {
  return await apiClient.get(`/${eduServiceCode}/1/100`);
  // } catch (error) {
  //   console.error(error);
  //   return Error("error");
  // }
};
