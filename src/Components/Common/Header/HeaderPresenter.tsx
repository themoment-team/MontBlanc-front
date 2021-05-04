import * as S from "./styled";
import * as I from "../../../Asset/SVG/index";
import { Link } from "react-router-dom";
import { useCheckLogged, useLogout } from "./HeaderContainer";
const Header: React.FC = () => {
  const logged = useCheckLogged();
  const tryLogout = useLogout();
  return (
    <S.Header>
      <div>
        <S.Logo>
          <I.Logo />
        </S.Logo>
        <S.LogoText>학교가 불편한 순간</S.LogoText>
      </div>
      {logged ? (
        <S.HeaderNav>
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
        <S.HeaderNav>
          <Link to="/Leave_opinion">의견 남기기</Link>
          <Link to="/topten">Top 10</Link>
          <Link to="/improvment">실제 개선 사례</Link>
          <Link to="/about">캠페인 자세히 보기</Link>
        </S.HeaderNav>
      )}
    </S.Header>
  );
};

export default Header;
