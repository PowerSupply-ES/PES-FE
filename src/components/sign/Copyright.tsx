import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";

// 스타일 속성 타입
interface CopyrightProps {
  sx?: SxProps<Theme>;
}

// 하단 copyright
const Copyright: React.FC<CopyrightProps> = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Goto HOME © "}
      <Link color="inherit" href="https://pes23.com/">
        pes23.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
