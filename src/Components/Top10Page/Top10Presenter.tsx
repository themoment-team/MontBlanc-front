import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../GlobalStyle/LeftBox";
import { heading, explanation } from "./Top10Container";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";
import { useModal } from "../../Context/Modal";

const Top10Page: React.FC = () => {
  const modal = useModal();

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation heading={heading} explanation={explanation} />
        <S.Btn>
          <Link to="/Leave_opinion">의견 남기기</Link>
        </S.Btn>
      </LeftBox>
      <S.RightBox>
        <S.TenIssues>
          <span>
            <span>{1}위</span>
            <article>
              {}전공 동아리 시간을
              늘려주세요요오옷ㅇㅅ오ㅗ서어소요성섯용서엿ㅅㅇㅅ옷욧ㅇ소dkfjadslkjflsjdkfjldsjflksjdklflkdfksjlk
            </article>
          </span>
          <span>
            <button onClick={() => modal.open("ViewModal", "답변달기", 2)}>
              답변{"보기"}
            </button>
            <GoodBtn Background={false} />
          </span>
        </S.TenIssues>
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default Top10Page;
