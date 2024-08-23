// 상단바 user 정보 API 요청
const getUserInfo = ({navigate, setMemberData}) => {
    
    const uri = "api/exp";
    const memberEmail = sessionStorage.getItem("memberEmail");

    fetch(`${uri}?memberEmail=${memberEmail}`, {
        method: "GET",
      })
        .then((response) => {
          if (response.status === 403) {
            alert("로그인이 만료됐습니다!");
            sessionStorage.clear();
            localStorage.clear();
            navigate("/signin");
          } else if (!response.ok) {
            console.log("서버응답:", response);
            throw new Error(
              `데이터 가져오기 실패: ${response.status} ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setMemberData(data);
          sessionStorage.setItem("memberName", data.memberName);
          sessionStorage.setItem("memberStatus", data.memberStatus);
          sessionStorage.setItem("hasNewNotices", data.hasNewNotices);
          console.log("hasNewNotices = ", data.hasNewNotices);
        })
        .catch((error) => {
          console.error("데이터 가져오기 실패:", error);
        });
}

export default getUserInfo;
