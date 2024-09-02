import axios, {AxiosResponse} from "axios";

// 댓글 달기 (post)
const postFeed = async (answerId: number, comment: string, selected: number): Promise<AxiosResponse> => {
  try {
    return await axios.post(`/api/comment/${answerId}`, {
      comment,  // 댓글
      commentPassFail: selected,
    });
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export default postFeed;
