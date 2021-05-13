import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../Constants/GlobalStyle/Detail";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";
import {
  heading,
  explanation,
  useTop10,
  list,
  adminHeading,
} from "./Top10Container";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import { useModal } from "Context/Modal";

const Top10Page = () => {
  const list = useTop10();
  const modal = useModal();
  const logged = useRecoilValue(HasAdminToken);

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation
          heading={!logged ? heading : adminHeading}
          explanation={explanation}
        />
        {!logged && (
          <S.Btn>
            <Link to="/Leave_opinion">의견 남기기</Link>
          </S.Btn>
        )}
      </LeftBox>
      <S.RightBox>
        {list.map((top10: list, index) => (
          <S.TenIssues key={top10.boardIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{top10.content}</article>
            </span>
            <span>
              <button onClick={() => (top10.answer && modal.open("EditModal", 1, "답변 달기"))}>
                { top10.answer ? (logged ? "답변달기" : "답변보기") : "답변없음"}
              </button>
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
