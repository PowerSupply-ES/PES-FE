import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { createTheme, CssBaseline } from "@mui/material";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const [index, setIndex] = React.useState(0);

  // MUI 테마 설정
  const theme = createTheme();
  const navigate = useNavigate();


  // 탭이동
  const toggleTab = (value) => {
    setIndex(value);
    if(index===0){
      navigate('/notice');
    }else if(index===1){
      navigate('/list');
    }
  }


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
            <Tab indicatorInset>문제 </Tab>
            <Tab indicatorInset>공지사항 </Tab>
          </StyledTabList>
        </Tabs>
      </StyledBox>
    </ThemeProvider>
  );
}

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
