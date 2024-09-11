// 관리자 SideMenu MUI 컴포넌트
import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SelectContent from "./SelectContent";
import {MenuContent, OptionsMenu} from "./index";


const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "40px",
          p: 1.5,
        }}
      >
        {/* <SelectContent /> */}
      </Box>
      {/* <Divider /> */}

      {/* 메뉴탭 */}
      <MenuContent />

      {/* user 정보 */}
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* TODO: Avatar 대체 */}
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {/* TODO: 관리자이름으로 대체 */}
            관리자
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {/* TODO: 관리자이메일로 대체 */}
            csi9926@gmail.com
          </Typography>
        </Box>

        {/* 하단 옵션선택 */}
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
