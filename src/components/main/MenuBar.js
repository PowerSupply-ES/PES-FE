import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { createTheme, CssBaseline } from "@mui/material";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

export default function MenuBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로에 따라 초기 탭 인덱스 설정
  const getInitialIndex = () => {
    if (location.pathname === '/list') return 0;
    if (location.pathname === '/notice') return 1;
    return null; // 홈이나 기타 경로인 경우 탭이 선택되지 않도록
  };

  const [index, setIndex] = useState(getInitialIndex());

  // 탭 이동
  const toggleTab = (value) => {
    setIndex(value);
    if (value === 0) {
      navigate('/list');
    } else if (value === 1) {
      navigate('/notice');
    }
  };

  useEffect(() => {
    // 경로가 '/'일 때 아무 탭도 선택되지 않도록 설정
    if (location.pathname === '/' && index !== null) {
      setIndex(null);
    } else if (location.pathname === '/list' && index !== 0) {
      setIndex(0);
    } else if (location.pathname === '/notice' && index !== 1) {
      setIndex(1);
    }
  }, [location.pathname, index]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledBox>
        <Tabs
          aria-label="Pipeline"
          value={index}
          onChange={(event, value) => toggleTab(value)}
        >
          <StyledTabList>
            <Tab indicatorInset>문제</Tab>
            <Tab indicatorInset>공지사항</Tab>
          </StyledTabList>
        </Tabs>
      </StyledBox>
    </ThemeProvider>
  );
}

const theme = createTheme();

const StyledBox = styled(Box)`
  flex-grow: 1;
  margin: -2px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const StyledTabList = styled(TabList)`
  padding-top: 8px;
  justify-content: left;

  && .${tabClasses.root} {
    flex: initial;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &.${tabClasses.selected} {
      color: ${(props) => props.theme.palette.primary.main};

      &::after {
        height: 2.5px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-color: ${(props) => props.theme.palette.primary[500]};
      }
    }

    font-size: 26px;
  }
`;
