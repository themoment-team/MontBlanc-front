import * as S from "./styled";
import * as I from "../../../Asset/SVG/index";
import { Link } from "react-router-dom";
import { useLogout } from "./HeaderContainer";
import { useRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import { useEffect, useState } from "react";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const tryLogout = useLogout();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);
  const [bars, setBars] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    }
  });

  return (
    <S.Header>
      <div>
        <S.Logo>
          <I.Logo />
        </S.Logo>
        <span>학교가 불편한 순간</span>
      </div>
      {logged ? (
        <S.HeaderNav active={bars}>
          <Link to="/topten">답변달기</Link>
          <Link to="/improvment">실제 개선 사례 작성</Link>
          <button
            onClick={() => {
              tryLogout();
            }}
          >
            로그아웃
          </button>
        </S.HeaderNav>
      ) : (
        <S.HeaderNav active={bars}>
          <Link to="/Leave_opinion">의견 남기기</Link>
          <Link to="/topten">Top 10</Link>
          <Link to="/improvment">실제 개선 사례</Link>
          <Link to="/about">캠페인 자세히 보기</Link>
        </S.HeaderNav>
      )}
      <S.BarWrapper>
        <FontAwesomeIcon icon={(bars ? faBars : faChevronUp)} onClick={() => (setBars((!bars)))}/>
      </S.BarWrapper>
    </S.Header>
  );
};

export default Header;
