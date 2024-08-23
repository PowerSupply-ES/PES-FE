import * as React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import MenuHook from "hooks/menu/MenuHook";
import {StyledBox, theme, StyledTabList } from "styles/styledComponent/Menu-styled";

function MenuBar() {
  // 훅 사용
  const {index, toggleTab} = MenuHook();

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
export default MenuBar;