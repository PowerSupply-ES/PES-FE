import React from "react";
import MemberInfo from "./MemberInfo";
import { MemberDetail } from "model/userType";

// MyInfo 타입 정의
interface MyInfoProps {
  memberData: MemberDetail;
}

const MyInfo: React.FC<MyInfoProps> = ({ memberData }) => {
  return (
    <MemberInfo
      memberName={memberData.memberName}
      memberId={memberData.memberId}
      memberEmail={memberData.memberEmail}
      memberGen={memberData.memberGen}
      memberStatus={memberData.memberStatus}
      memberMajor={memberData.memberMajor}
      memberPhone={memberData.memberPhone}
    />
  );
};

export default MyInfo;
