import styled from "styled-components";

// List페이지 스타일
export const StyledListPage = styled.div`
  
  .list_wrapper {
    display: flex;
    
  }
  .list_container {
    margin-right: 5%;
    width: 60%;
    font-family: "Pretendard-Regular";

  }

  .ranking_container {
    width: 20%;
    min-width: fit-content;
    font-family: "Pretendard-Regular";
  }

  .container_header {
    margin-bottom: 20px;
    font-weight: bold;
    align-items: center;
    font-size: 30px;
    display: flex;
    width: 100%;
  }

  .student_container {
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    font-size: 18px;
    display: flex;
    width: 100%;
  }

  .student_button {
    width: 48%;
    height: fit-content;
    padding: 7px 30px;
    box-shadow: rgb(204, 201, 201) 1px 1px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    font-family: "Pretendard-Regular";
  }

  /* 클릭된 버튼 스타일 */
  .student_button_active {
    background-color: #cccccc;
    color: #fff;
  }

  .select_box {
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    height: 40px;
    display: flex;
    width: 50%;
  }

  .ranking-list {
    max-height: 400px;
    overflow-y: auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .problem_wrapper {
    height: fit-content;
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  }
`;

// 랭킹 제목 스타일
export const RankingItemStyled = styled.div`
  margin-bottom: 1px;
  padding: 0 10px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
    margin-right: 2px;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
  }
`;