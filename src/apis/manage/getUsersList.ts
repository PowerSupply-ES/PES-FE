import axios from "axios";
import { Member } from "model/Store";

// 회원 데이터 상태관리 훅 setMemDate의 타입
type SetMemDate = React.Dispatch<React.SetStateAction<Member[]>>;

// 회원목록 api호출
const getUsersList = async (setMemDate: SetMemDate): Promise<void> => {
  const uri = `api/admin/memberlist`;

  try {
    const res = await axios.get<Member[]>(uri);
    const memList = res.data;
    setMemDate([...memList]);
  } catch (error) {
    console.error(error);
  }
  // TODO : 예외처리하기
};
export default getUsersList;
