import React from "react";
import "styles/css/intro.css";
import LoginTemp from "components/sign/LoginTemp";

const Signin: React.FC = () => {
  return (
    <div className="sign-wrapper">
      <LoginTemp />
    </div>
  );
};

export default Signin;
