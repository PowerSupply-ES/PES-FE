import { Tabs } from "antd";
import React from 'react'
import "antd/dist/antd.css"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();

  const handleMenu = (key) => {

    if(key==='1'){
      navigate('/list')
    }else if(key==='2'){
      navigate('/notice')
    }
  };

  const items = [
  {
      key: '1',
      label: '문제',
  },
  {
      key: '2',
      label: '공지사항',
  },
  ];

  return (
    <div>
      <StyledTabs defaultActiveKey="1" items={items} onChange={ handleMenu } />
    </div>
  )
}

export default MenuBar;

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    font-size: 28px; /* 원하는 글자 크기로 변경 */
  }
  
  .ant-tabs-tab-active {
    font-size: 28px; /* 활성 탭의 글자 크기 변경 */
  }
`;