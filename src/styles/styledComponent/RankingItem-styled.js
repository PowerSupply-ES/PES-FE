import styled from "styled-components";

export const StyledRankingItem = styled.div`
  margin-bottom: 1px;
  align-items: center;
  font-size: 18px;
  height: 40px;
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 8px;

  .ranking_id {
    width: 20%;
  }
  .member_name {
    text-align: left;
    flex: 1 1 0%;
  }
  .score {
    width: 20%;
  }
`;
