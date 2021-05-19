import * as S from "./styled";
import * as I from "../../../Asset/SVG/index";
import { Link } from "react-router-dom";
import { useLogout } from "./HeaderContainer";
import { useRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import { useEffect } from "react";
import Config from "Constants/Config.json";

const Header: React.FC = () => {
  const tryLogout = useLogout();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  });

  return (
    <S.Header>
      <Link to={Config.LINK.COMMENT}>
        <S.Logo>
          <I.Logo />
        </S.Logo>
        <S.LogoText>학교가 불편한 순간</S.LogoText>
      </Link>
      {!logged ? (
        <S.HeaderNav>
          <Link to={Config.LINK.COMMENT}>의견 남기기</Link>
          <Link to={Config.LINK.TOP10}>Top 10</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례</Link>
          <Link to={Config.LINK.ABOUT}>캠페인 자세히 보기</Link>
        </S.HeaderNav>
      ) : (
        <S.HeaderNav>
          <Link to={Config.LINK.TOP10}>답변달기</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례 작성</Link>
          <button
            onClick={() => {
              tryLogout();
            }}
          >
            로그아웃
          </button>
        </S.HeaderNav>
      )}
    </S.Header>
  );
};

export default Header;
