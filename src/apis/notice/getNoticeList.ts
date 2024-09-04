import axios from "axios";
import React from "react";
import { NoticeListType } from "model/Store";

// NoticeList 상태관리 HOOK setNoticeList 타입
type SetNoticeList = React.Dispatch<React.SetStateAction<NoticeListType[]>>;

// 공지사항 리스트 get API 요청
const getNoticeList = async (setNoticeList: SetNoticeList): Promise<void> => {
  const uri = "api/notice";

  try {
    const response = await axios.get(uri);

    if (response.status === 204) {
      console.log("공지사항이 아직 없습니다!");
      setNoticeList([]); // 빈 배열로 설정
      return;
    }
    setNoticeList(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {  //axios error인지 확인
      // 서버가 응답을 반환했지만 상태 코드가 오류를 나타내는 경우
      console.error(
        "Axios 오류 발생:",
        error.response?.status,
        error.response?.statusText
      );
    } else if (error instanceof Error) {  //js오류인지 확인
      // 요청이 서버로 전송되었지만 응답을 받지 못한 경우
      console.error("일반 오류 발생:", error.message);
    } else {
      console.error("알 수 없는 오류 발생:", error);
    }
  }
};

export default getNoticeList;
