// MUI 적용 메뉴바 스타일
import styled, { css } from "styled-components";
import { createTheme } from "@mui/material";
import Box from "@mui/joy/Box";
import TabList from "@mui/joy/TabList";
import { tabClasses } from "@mui/joy/Tab";

export const theme = createTheme();

// StyledTabList를 index 값에 따라 스타일을 다르게 적용
export const StyledTabList = styled(TabList)<{ index: number }>`
  padding-top: 8px;
  justify-content: left;

  && .${tabClasses.root} {
    flex: initial;
    background-color: transparent;

    &.${tabClasses.selected} {
      ${({ index }) =>
        index === 0
          ? css`
              color: inherit; /* 기본 색상으로 유지 */
              &::after {
                display: none; /* 밑줄 숨김 */
              }
            `
          : css`
              color: ${(props) => props.theme.palette.primary.main};

              &::after {
                content: "";
                display: block;
                height: 2.5px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                background-color: ${(props) => props.theme.palette.primary[500]};
                margin-top: 8px;
              }
            `}
    }

    font-size: 26px;
  }
`;

export const StyledBox = styled(Box)`
  flex-grow: 1;
  margin: -2px;
  overflow-x: hidden;
  overflow-y: hidden;
`;