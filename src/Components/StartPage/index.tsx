import { useEffect } from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG/index";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HasAdminToken } from "../../Atom";
import Config from "Constants/Config.json";
import LoginModalPresenter from "Components/Modals/LoginModal";

const StartPage: React.FC = () => {
  const history = useHistory();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    }
  }, []);

  return (
    <S.StartPage>
      <S.LeftBox>
        <S.StartHeader>
          <S.Logo>
            <I.Logo />
          </S.Logo>
          <S.H1>
            학교가 불편할 때,
            <br />
            언제였나요?
          </S.H1>
          <S.H2>
            학교를 다니면서 불편함을 느꼈던 적이 있다면 자유롭게 의견을
            남겨주세요.
          </S.H2>
        </S.StartHeader>
        <S.ButtonBox>
          {logged ? (
            <>
              <button
                onClick={() => alert("관리자는 학생페이지를 볼 수 없습니다.")}
              >
                Student
              </button>
              <button onClick={() => history.push(Config.LINK.RANK)}>
                Admin
              </button>
            </>
          ) : (
            <>
              <button onClick={() => history.push(Config.LINK.COMMENT)}>
                Student
              </button>
              <LoginModalPresenter />
            </>
          )}
        </S.ButtonBox>
      </S.LeftBox>
      <S.RightBox>
        <S.ImgBox>
          <I.Start_img1 />
          <I.Start_img2 />
          <I.Start_img3 />
          <I.Start_img4 />
        </S.ImgBox>
      </S.RightBox>
    </S.StartPage>
  );
};

export default StartPage;
