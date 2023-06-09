import { requestEduPrograms, eduServiceCode } from "../../network/api/eduApi";
import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import store from "../../store";
import { setPrograms } from "../../features/eduTable/eduSlice";

async function getData() {
  const response = await requestEduPrograms();

  store.dispatch(setPrograms(response.row));
  return response;
}

const home = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <TableCard>
        <EduTable />
      </TableCard>
    </div>
  );
};

export default home;
