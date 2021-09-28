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
} from "./Top30Container";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import Config from "Constants/Config.json";
import { EditModal, ViewModal } from "Components/Modals";

const Top10Page = () => {
  const list = useTop10();
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
          <S.LinkCommentPageBtn
            onClick={() => history.push(Config.LINK.COMMENT)}
          >
            의견 남기기
          </S.LinkCommentPageBtn>
        )}
      </LeftBox>
      <S.RightBox>
        {list.map((top10: list, index) => (
          <S.TenIssues key={top10.boardIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{top10.content.replace(/^\s+|\s+$/gm, "")}</article>
            </span>
            <span>
              {top10.answer ? (
                <ViewModal
                  idx={top10.boardIdx}
                  state={"answer"}
                  buttonContent={"답변보기"}
                />
              ) : logged ? (
                <EditModal
                  idx={top10.boardIdx}
                  state={"answer"}
                  ButtonContent={"답변달기"}
                  heading={"답변달기"}
                  title={
                    top10.content.replace(/^\s+|\s+$/gm, "") + "불편함 답변"
                  }
                />
              ) : (
                <button>답변없음</button>
              )}
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
