import { FaCircleUser } from "react-icons/fa6";
import useMypage from "hooks/mypage/useMypage";

const MyInfo = () => {
  const { memberData } = useMypage();

  return (
    <div className="left">
      {/* 사용자 정보 */}
      <div className="memberInfo">
        <div className="info_name">
          <FaCircleUser size={40} style={{ color: "grey" }}></FaCircleUser>
          <p>{memberData.memberName}</p>
          {/* <p>님</p> */}
        </div>
        <div className="text">
          <div>학 번</div>
          <p>{memberData.memberId}</p>
        </div>
        <div className="text">
          <div>이메일</div>
          <p>{memberData.memberEmail}</p>
        </div>
        <div className="text">
          <div>기 수</div>
          <p>{memberData.memberGen}</p>
        </div>
        <div className="text">
          <div>상 태</div>
          <p>{memberData.memberStatus}</p>
        </div>
        <div className="text">
          <div>학 과</div>
          <p>{memberData.memberMajor}</p>
        </div>
        <div className="text">
          <div>전화 번호</div>
          <p>{memberData.memberPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
