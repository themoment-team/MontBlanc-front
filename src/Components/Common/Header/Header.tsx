import * as S from "./styled";
import * as I from "../../../Asset/SVG/index";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "../../../Atom";

const Header: React.FC = () => {
  const logged = useRecoilValue(HasAdminToken);
  
  return (
    <S.Header>
      <div>
        <S.Logo>
          <I.Logo />
        </S.Logo>
        <S.LogoText>학교가 불편한 순간</S.LogoText>
      </div>
      { logged === true ?
        <S.HeaderNav>
          <Link to="/Leave_opinion">답변달기</Link>
          <Link to="/improvment">실제 개선 사례 작성</Link>
          <button>로그아웃</button>
        </S.HeaderNav> :
        <S.HeaderNav>
          <Link to="/Leave_opinion">의견 남기기</Link>
          <Link to="/topten">Top 10</Link>
          <Link to="/improvment">실제 개선 사례</Link>
          <Link to="/about">캠페인 자세히 보기</Link>
        </S.HeaderNav>
      }
    </S.Header>
  );
};

export default Header;
