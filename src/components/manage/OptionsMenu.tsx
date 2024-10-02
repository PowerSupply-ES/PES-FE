// 관리자 SideMenu 하단 옵션 컴포넌트
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogout from 'apis/common/postLogout';
import {MenuButton} from './index';

import { styled } from '@mui/material/styles';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';



const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent' }}
      >
        <MoreVertRoundedIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Add another account</MenuItem>
        {/* <MenuItem onClick={handleClose}>Settings</MenuItem> */}
        <Divider />
        <MenuItem
          // 로그아웃
          onClick={() => postLogout(navigate)}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
          >
          <ListItemText >Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}