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
              <button>답변보기</button>
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
