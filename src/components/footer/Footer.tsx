import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import postLogout from "apis/common/postLogout";
import React from "react";

const Footer: React.FC = () => {
  const status = sessionStorage.getItem("status");

  return (
    <div className="footer">
      <div className="footer_left">
        <p className="logo">PES</p>
        <div className="info">
          <div className="phone">
            <IoIosMail size={24} /> <p>123qpq@naver.com</p>
          </div>
          <div className="address">
            <FaMapMarkerAlt size={20} />
            <p>경북 경산시 대학로 280 생산기술연구원 G15 213호</p>
          </div>
        </div>
      </div>
      <div className="footer_right">
        <p className="about">About The Club</p>
        <p className="info1">영남대학교 로봇공학과 동아리 PowerSupply의</p>
        <p className="info2">교육시스템 개발팀 PES</p>
        <div className="sns">
          <a
            href="https://www.instagram.com/team.pes23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagramAlt size={36} />
          </a>
          <a
            href="https://github.com/PowerSupply-ES"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>

        {/* 로그아웃 상태시 안보이게 */}
        {status ? (
          <div onClick={postLogout} className="footer_logout">
            로그아웃
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Footer;
