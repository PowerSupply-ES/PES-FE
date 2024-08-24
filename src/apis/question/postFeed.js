import axios from "axios";

// 댓글 달기 (post)
const postFeed = async (answerId, comment, selected) => {
  try {
    await axios.post(`/api/comment/${answerId}`, {
      comment: comment,
      commentPassFail: selected,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postFeed;
