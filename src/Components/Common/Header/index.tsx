import * as S from "./style";
import * as I from "../../../Asset/SVG/index";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { HasAdminToken, VisibleBannerState } from "Atom";
import { useEffect, useState, useRef } from "react";
import {
  faBars as Bar,
  faChevronUp as ArrowTop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Config from "Shared/Config.json";
import { useSetRecoilState } from "recoil";
import admin from "Api/admin";
import Banner from "Components/Banner";

const useLogout = () => {
  const setHasToken = useSetRecoilState(HasAdminToken);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await admin.logout();
      localStorage.removeItem("themoment_token");
      localStorage.removeItem("themoment_token_refresh");
      setHasToken(false);
    } catch (e) {
      alert(e);
    }
    navigate("/");
  };

  return logout;
};

const Header: React.FC = () => {
  const tryLogout = useLogout();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);
  const visibleBannerState = useRecoilValue(VisibleBannerState);
  const [bars, setBars] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  });

  useEffect(() => {
    const { current } = headerRef;
    if (current !== null) {
      current.style.position = `absolute`;
    }
  }, []);

  return (
    <>
      <S.Header ref={headerRef}>
        <S.HeaderContainer>
          <Link to={Config.LINK.COMMENT}>
            <S.Logo>
              <I.Logo />
            </S.Logo>
            <S.Title>학교가 불편한 순간</S.Title>
          </Link>
          <S.BarWrapper>
            <FontAwesomeIcon
              icon={bars ? Bar : ArrowTop}
              onClick={() => setBars(!bars)}
            />
          </S.BarWrapper>
        </S.HeaderContainer>
        {!logged ? (
          <S.HeaderNav active={bars}>
            <Link to={Config.LINK.COMMENT}>의견 남기기</Link>
            <Link to={Config.LINK.RANK}>Top 30</Link>
            <Link to={Config.LINK.BEFORERANK}>지난 TOP3 모아보기</Link>
            <Link to={Config.LINK.IMPROVEMENT}>실제 개선 사례</Link>
            <Link to={Config.LINK.ABOUT}>캠페인 자세히 보기</Link>
          </S.HeaderNav>
        ) : (
          <S.HeaderNav active={bars}>
            <Link to={Config.LINK.COMMENT}>의견 보러가기</Link>
            <Link to={Config.LINK.RANK}>답변달기</Link>
            <Link to={Config.LINK.BEFORERANK}>지난 TOP3 작성</Link>
            <Link to={Config.LINK.IMPROVEMENT}>실제 개선 사례 작성</Link>
            <S.NavButton
              onClick={() => {
                tryLogout();
              }}
            >
              로그아웃
            </S.NavButton>
          </S.HeaderNav>
        )}
        {!visibleBannerState && <S.Blur active={bars}></S.Blur>}
      </S.Header>
      {visibleBannerState && <Banner />}
    </>
  );
};

export default Header;
