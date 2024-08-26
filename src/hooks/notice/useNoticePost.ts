import { ChangeEvent, useState } from "react";
import postNotice from "apis/notice/postNotice";
import { useNavigate } from "react-router-dom";
import { PostNoticeType } from "model/Store";

// TODO : hook들 모두 반환타입 지정하기

// 공지사항 등록 관련 HOOK
const useNoticePost = () => {
  const navigate = useNavigate();

  const [notice, setNotice] = useState<PostNoticeType>({
    title: "",
    content: "",
    isImportant: false, //초기값 false로 설정
  });

  //입력필드 값 변경될때마다 호출
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // onChange 이벤트가 발생하는 입력 요소에 대한 이벤트 객체
    const { name, value, type } = e.target;

    // 입력 요소의 타입이 체크박스이고 checked 속성이 있다면 해당 값에 따라 isImportant 값을 변경
    const newValue = type === "checkbox" ? !notice.isImportant : value;

    setNotice({
      // notice복사, 변경된 필드만 업데이트
      ...notice,
      [name]: newValue,
    });
  };

  // 폼이 제출될 때 호출
  const handleSubmit = () => {
    postNotice(notice, navigate);
  };

  return { notice, handleInputChange, handleSubmit };
};

export default useNoticePost;
