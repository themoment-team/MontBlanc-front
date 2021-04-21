import * as S from "./styled";
import * as I from "../../Asset/SVG/index";
import { Link } from "react-router-dom";
import { useModal } from "../../Context/Modal";

const StartPage: React.FC = () => {
  const modal = useModal();
  
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
          <button onClick={() => modal.open("LoginModal")}>
            Admin
          </button>
        </S.ButtonBox>
      </S.LeftBox>
      <S.RightBox>
        <S.ImgBox>
          <I.Start_img1 />
          <I.Start_img2 />
          <I.Start_img3 />
        </S.ImgBox>
      </S.RightBox>
    </S.StartPage>
  );
};

export default StartPage;
