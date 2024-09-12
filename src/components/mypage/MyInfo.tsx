import React from "react";
import useMypage from "hooks/mypage/useMypage";
import MemberInfo from "./MemberInfo";

// MyInfo 타입 정의
interface MyInfoProps {}

const MyInfo: React.FC<MyInfoProps> = () => {
  const { memberData } = useMypage();

  if (!memberData) {
    return <div>Loading...</div>;
  }

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
