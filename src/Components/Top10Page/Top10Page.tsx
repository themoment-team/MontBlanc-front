import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../GlobalStyle/LeftBox";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";

const heading: string[] = ["학교가 불편한 순간", "TOP 10"];
const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const Top10Page: React.FC = () => {
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
            <button>답변{"보기"}</button>
            <GoodBtn Background={false} />
          </span>
        </S.TenIssues>
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default Top10Page;
