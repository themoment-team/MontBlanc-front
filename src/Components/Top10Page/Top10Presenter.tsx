import { PageExplanation } from "../PageExplanation";
import { useHistory } from "react-router-dom";
import { LeftBox } from "../../Constants/Styles/Detail";
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
import Config from "Constants/Config.json";

const Top10Page = () => {
  const list = useTop10();
  const modal = useModal();
  const logged = useRecoilValue(HasAdminToken);
  const history = useHistory();

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation
          heading={!logged ? heading : adminHeading}
          explanation={explanation}
        />
        {!logged && (
          <S.LinkCommentPageBtn onClick={() => history.push(Config.LINK.COMMENT)}>
            의견 남기기
          </S.LinkCommentPageBtn>
        )}
      </LeftBox>
      <S.RightBox>
        {list.map((top10: list, index) => (
          <S.TenIssues key={top10.boardIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{top10.content.replace(/^\s+|\s+$/gm,'')}</article>
            </span>
            <span>
              <button
                onClick={() =>
                  top10.answer
                    ? modal.open(
                        "ViewModal",
                        top10.boardIdx,
                        "answer",
                        "답변보기"
                      )
                    : logged &&
                      modal.open(
                        "EditModal",
                        top10.boardIdx,
                        "answer",
                        "답변달기"
                      )
                }
              >
                {top10.answer ? "답변보기" : logged ? "답변달기" : "답변없음"}
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
