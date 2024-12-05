import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { MemberInfoProps } from "model/userType";
import "styles/css/mypage.css";
import "styles/css/manageUser.css";

// 사용자 정보 컴포넌트
const MemberInfo: React.FC<MemberInfoProps> = ({
  memberName,
  memberId,
  memberEmail,
  memberGen,
  memberStatus,
  memberMajor,
  memberPhone
}) => {
  return (
    <div className="left">
      {/* 사용자 정보 */}
      <div className="memberInfo">
        <div className="info_name">
          <FaCircleUser size={40} style={{ color: "grey" }}></FaCircleUser>
          <p>{memberName}</p>
          {/* <p>님</p> */}
        </div>
        <div className="text">
          <div>학 번</div>
          <p>{memberId}</p>
        </div>
        <div className="text">
          <div>이메일</div>
          <p>{memberEmail}</p>
        </div>
        <div className="text">
          <div>기 수</div>
          <p>{memberGen}</p>
        </div>
        <div className="text">
          <div>상 태</div>
          <p>{memberStatus}</p>
        </div>
        <div className="text">
          <div>학 과</div>
          <p>{memberMajor}</p>
        </div>
        <div className="text">
          <div>전화 번호</div>
          <p>{memberPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
