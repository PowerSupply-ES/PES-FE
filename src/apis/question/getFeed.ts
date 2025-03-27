import axios from "axios";
import { CommentListType } from "model/questionType";

// 댓글 불러오기 (get)
const getFeed = async (answerId: number) => {
  try {
    const res = await axios.get<CommentListType[]>(`/api/comment/${answerId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export default getFeed;
