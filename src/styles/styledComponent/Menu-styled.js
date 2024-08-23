// MUI 적용 메뉴바 스타일
import styled from "styled-components";
import { createTheme } from "@mui/material";
import Box from "@mui/joy/Box";
import TabList from "@mui/joy/TabList";
import { tabClasses } from "@mui/joy/Tab";

export const theme = createTheme();

export const StyledBox = styled(Box)`
  flex-grow: 1;
  margin: -2px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const StyledTabList = styled(TabList)`
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
