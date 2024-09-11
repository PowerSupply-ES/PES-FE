// 관리자 버튼 클릭 MUI 컴포넌트
import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}

export default function MenuButton({
  showBadge = false,
  ...props
}: MenuButtonProps) {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
}