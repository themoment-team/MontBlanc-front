import * as S from "./styled";
import * as I from "../../Asset/SVG/index";
import { Link } from "react-router-dom";

interface HeaderProps {
  state: string;
}

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  if (p.state !== "student") {
    return (
      <S.Header>
        <div>
          <I.Logo />
          <span>학교가 불편한 순간</span>
        </div>
        <S.HeaderNav>
          <Link to="/Leave_opinion">답변달기</Link>
          <Link to="/improvment">실제 개선 사례 작성</Link>
        </S.HeaderNav>
      </S.Header>
    );
  } else {
    return (
      <S.Header>
        <div>
          <S.Logo>
            <I.Logo />
          </S.Logo>
          <S.LogoText>학교가 불편한 순간</S.LogoText>
        </div>
        <S.HeaderNav>
          <Link to="/Leave_opinion">의견 남기기</Link>
          <Link to="/v1/uncomfortable">Top 10</Link>
          <Link to="/improvment">실제 개선 사례</Link>
          <Link to="/about">캠페인 자세히 보기</Link>
        </S.HeaderNav>
      </S.Header>
    );
  }
};

export default Header;
