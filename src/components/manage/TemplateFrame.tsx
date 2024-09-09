// MUI 템플릿 - manageUser페이지
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
// import getDashboardTheme from './theme/getDashboardTheme';
import SideMenu from "./SideMenu";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
  flex: "0 0 auto",
}));
interface TemplateFrameProps {
  children: React.ReactNode;
}

export default function TemplateFrame({ children }: TemplateFrameProps) {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* navbar */}
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "98%",
              p: "8px 12px",
            }}
          >
            <Button
              variant="text"
              size="small"
              aria-label="Back to MyPage"
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              onClick={() => navigate("/mypage")}
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Back to MyPage
            </Button>

            {/* <IconButton
              size="small"
              aria-label="Back to templates"
              component="a"
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: 'auto', sm: 'none' } }}
            >
              <ArrowBackRoundedIcon />
            </IconButton> */}
          </Toolbar>
        </StyledAppBar>

        {/* container - menu탭, 본문 */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <SideMenu />
          <Box
            sx={{ flexGrow: 1, overflow: "auto", width: "calc(100% - 240px)" }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
