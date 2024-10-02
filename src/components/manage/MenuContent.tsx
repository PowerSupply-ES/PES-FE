// 관리자 SideMenu 탭 MUI 컴포넌트
import { useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


// 탭 메뉴 목록
const mainListItems = [
  { text: '회원 관리', icon: <PeopleRoundedIcon />, path: '/manageUser'},
  { text: '문제 관리', icon: <AssignmentRoundedIcon />, path: '/manageProb'},
  { text: '피드백 관리', icon: <AnalyticsRoundedIcon />, path: '/manageFeed'},
];
const secondaryListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/'  },
  // { text: 'Settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', icon: <InfoRoundedIcon /> }, // TODO : 경로 추가
  //{ text: 'Info', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // TODO : 공통부분 컴포넌트로 제작
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton 
              selected={location.pathname === item.path} // 현재 경로와 메뉴 경로 비교
              sx={{ 
                minHeight: 52,
                px: 2, // 좌우 패딩
                
              }}
              onClick={() => {
                if (item.path) {
                  navigate(item.path); // 경로가 있으면 해당 경로로 이동
                }
              }}>
              
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              sx={{ 
                minHeight: 52,
                px: 2,
                
              }}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
              }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}