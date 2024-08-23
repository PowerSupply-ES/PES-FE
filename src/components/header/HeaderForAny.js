import MenuBar from "components/header/MenuBar";
import { useNavigate } from "react-router-dom";

// 로그인x 경우 넷바
const HeaderForAny = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <a className="logout" href="/signin">
        로그인
      </a>

      <div className="navbar">
        <p className="logo" onClick={() => navigate("/")}>
          PES
        </p>
        <MenuBar />
      </div>
    </div>
  );
};

export default HeaderForAny;
