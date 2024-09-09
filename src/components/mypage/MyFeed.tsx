import React from "react";
import { MyFeedProps } from "model/userType";

// 내 피드백 컴포넌트
const MyFeed: React.FC<MyFeedProps> = ({ myFeedback, navigate }) => {
  const gotoFeed = (problemId: number) => {
    console.log("problemId: ", problemId);
    navigate(`question/${problemId}`);
  };

  return (
    <div className="FeedList">
      {myFeedback.length === 0 ? (
        <div className="noFeed">아직 받은 피드백이 없어요!</div>
      ) : (
        myFeedback.map((it) => (
          <div className="feeds" key={it.answerId}>
            <p className="problemId">{it.answerId}</p>

            <p className="memberGenName">
              {it.memberGen}기&nbsp;&nbsp;
              {it.memberName}
            </p>

            <p className="commentContent" onClick={() => gotoFeed(it.answerId)}>
              {it.commentContent}
            </p>

            <div
              className={`${
                it.commentPassFail === 1
                  ? "btn_success"
                  : it.commentPassFail === 0
                  ? "btn_fail"
                  : "btn_state"
              }`}
            >
              {it.commentPassFail === 1
                ? "success"
                : it.commentPassFail === 0
                ? "fail"
                : it.commentPassFail}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyFeed;
