import axios from "axios";
import React from "react";
import { NoticeDetailType } from "model/noticeType";

// NoticeDetail 상태관리 HOOK setDetail 타입
type SetNoticeDetail = React.Dispatch<React.SetStateAction<NoticeDetailType | null>>;

// 공지사항 세부사항 get API
const getNoticeDetail = async (
  setDetail: SetNoticeDetail, noticeId: number, uri: string
  ) => {
  try {
    const response = await axios.get(`${uri}${noticeId}`);
    setDetail(response.data);
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

export default getNoticeDetail;
