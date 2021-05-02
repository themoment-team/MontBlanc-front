import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../Constants/GlobalStyle/Detail";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";
import { heading, explanation, useTop10, list, adminHeading} from "./Top10Container";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";

const Top10Page = () => {
  const list = useTop10();
  const commentState = "답변없음" // 답변이 달려있는지 또는 안 달려있는지의 대한 상태
  const logged = useRecoilValue(HasAdminToken);

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation heading={logged ? heading : adminHeading} explanation={explanation} />
        {logged === true &&
          <S.Btn>
            <Link to="/Leave_opinion">의견 남기기</Link>
          </S.Btn>
        }
      </LeftBox>
      <S.RightBox>
        {list.map((top10: list, index) => (
          <S.TenIssues key={top10.boardIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{top10.content}</article>
            </span>
            <span>
              <button>{logged ? "답변보기" : commentState }</button>
              <GoodBtn
                Background={false}
                Goods={top10.goods}
                Idx={top10.boardIdx}
              />
            </span>
          </S.TenIssues>
        ))}
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default Top10Page;
