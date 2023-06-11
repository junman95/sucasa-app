import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import store from "../../store";
import { setPrograms } from "../../features/eduTable/eduSlice";
import { EduProgram } from "../../features/eduTable/type";
import { requestEduPrograms } from "../../network/api/eduApi";

const urlPath = process.env.NEXT_PUBLIC_API_URL;
const dataType = "json";
const baseUrl = urlPath + "/" + dataType;

export const eduServiceCode = "TBordCont5";

export interface EduData {
  row: EduProgram[];
}

const getData = async () => {
  const response = await requestEduPrograms();
  return response.row;
};

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <TableCard>
        <EduTable data={data} />
      </TableCard>
    </div>
  );
};

export default Home;
