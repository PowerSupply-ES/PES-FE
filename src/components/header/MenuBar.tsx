import React from "react";
import useMenu from "hooks/menu/useMenu";
import { CssBaseline, Box, Tabs, Tab, createTheme, ThemeProvider } from "@mui/material";

// MUI 테마 생성
const theme = createTheme();

const MenuBar: React.FC = () => {
  // 훅 사용
  const { index, toggleTab } = useMenu();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, mt: 2, overflow: "hidden" }}>
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
          sx={{ display: 'flex', justifyContent: 'flex-start', pt: 1 }}
        >
          <Tab label="문제" value={1} sx={getTabStyle(index, 1)} />
          <Tab label="공지사항" value={2} sx={getTabStyle(index, 2)} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

// Tab의 스타일 설정 함수
const getTabStyle = (currentIndex: number | false, tabIndex: number) => ({
  flex: 'initial',
  fontSize: '26px',
  color: currentIndex === tabIndex ? 'primary.main' : 'inherit',
  '&::after': {
    content: '""',
    display: currentIndex === tabIndex ? 'block' : 'none',
    height: '2.5px',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    backgroundColor: 'primary.main',
    marginTop: '8px',
  },
});

export default MenuBar;
