import * as React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import useMenu from "hooks/menu/useMenu";
import {
  StyledBox,
  theme,
  StyledTabList,
} from "styles/styledComponent/Menu-styled";

const MenuBar: React.FC = () => {
  // 훅 사용
  const { index, toggleTab } = useMenu();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledBox>
        <Tabs
          aria-label="Pipeline"
          value={index !== null ? index : undefined} // index가 null일 경우 undefined로 설정
          onChange={(event, value) => {
            // value가 string | number | null이므로, 10진수로 변환
            if (value !== undefined && value !== null) {
              const numericValue = typeof value === 'number' ? value : parseInt(value, 10);
              // number타입일때 탭이동
              if (!isNaN(numericValue)) {
                toggleTab(numericValue);
              }
            }
          }}
        >
          <StyledTabList>
            <Tab indicatorInset value={0}>문제</Tab>
            <Tab indicatorInset value={1}>공지사항</Tab>
          </StyledTabList>
        </Tabs>
      </StyledBox>
    </ThemeProvider>
  );
}
export default MenuBar;
