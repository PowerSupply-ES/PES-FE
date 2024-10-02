import React from "react";
import { CssBaseline } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import useMenu from "hooks/menu/useMenu";
import { ThemeProvider } from "styled-components";
import { StyledBox, theme, StyledTabList } from "styles/styledComponent";

const MenuBar: React.FC = () => {
  // 훅 사용
  const { index, toggleTab } = useMenu();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledBox>
        <Tabs
          aria-label="Pipeline"
          value={index}
          onChange={(event, value) => {
            // value가 string | number | null이므로, 10진수로 변환
            if (value !== undefined && value !== null) {
              const numericValue =
                typeof value === "number" ? value : parseInt(value, 10);
              // number타입일때 탭이동
              if (!isNaN(numericValue)) {
                toggleTab(numericValue);
              }
            }
          }}
        >
          <StyledTabList index={index}>
            <Tab value={1}>문제</Tab>
            <Tab value={2}>공지사항</Tab>
          </StyledTabList>
        </Tabs>
      </StyledBox>
    </ThemeProvider>
  );
};
export default MenuBar;
