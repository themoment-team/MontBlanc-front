import * as S from "./styled";
import * as I from "../../Asset/SVG/index";
import { Link } from "react-router-dom";

const StartPage: React.FC = () => {
  return (
    <S.StartPage>
      <S.LeftBox>
        <S.StartHeader>
          <S.Logo>
            <I.Logo />
          </S.Logo>
          <S.H1>
            학교가 불편할 때는,
            <br />
            언제였나요?
          </S.H1>
          <S.H2>
            학교를 다니면서 불편함을 느꼈던 적이 있다면 자유롭게 의견을
            남겨주세요.
          </S.H2>
        </S.StartHeader>
        <S.ButtonBox>
          <Link to="/Leave_opinion">
            <button>Student</button>
          </Link>
          <button>Admin</button>
        </S.ButtonBox>
      </S.LeftBox>
      <S.RightBox>
        <I.StartImg />
      </S.RightBox>
    </S.StartPage>
  );
};

export default StartPage;
