
//로그아웃 api호출 함수
const postLogout = (navigate) => {
    const uri = "api/logout";

    fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error("로그아웃 실패:", response.status, response.statusText);
          throw new Error(
            `로그아웃 실패: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // 로컬 스토리지 클리어
        sessionStorage.clear();
        localStorage.clear();
        alert(data.message);

        navigate('/');
        window.location.reload(); // 페이지 새로 고침
      })
      .catch((error) => {
        console.error("로그아웃 실패:", error);
      });
};

export default postLogout;