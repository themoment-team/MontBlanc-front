import * as S from "./styled";
import * as I from "../../Asset/SVG/index";

interface HeaderProps {
  state: string;
}

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  return (
    <S.Header>
      <div>
        <I.Logo />
        <span>학교가 불편한 순간</span>
      </div>
      <ul>
        <li>답변달기</li>
        <li>실제 개선 사례 작성</li>
        <li>캠페인 자세히 보기</li>
      </ul>
    </S.Header>
  );
};

export default Header;
