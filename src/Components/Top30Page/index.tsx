import { PageExplanation } from "../PageExplanation";
import { useHistory } from "react-router-dom";
import { LeftBox } from "../../Constants/Styles/Detail";
import GoodBtn from "../GoodBtn";
import * as I from "../../Asset/SVG/index";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import Config from "Constants/Config.json";
import { EditModal, ViewModal } from "Components/Modals";
import Table from "Api/table";
import { useEffect, useState } from "react";

interface list {
  boardIdx: number;
  content: string;
  goods: number;
  answer: boolean;
}

const useTop10 = () => {
  const [list, setList] = useState<list[]>([
    { boardIdx: 0, content: "", goods: 0, answer: false },
  ]);
  const tryTop10 = async () => {
    return await Table.viewTop10Table();
  };
  useEffect(() => {
    tryTop10().then((res) => setList(res.data.list));
  }, []);
  return list;
};

const heading: string[] = ["학교가 불편한 순간", "TOP 30"];
const adminHeading: string[] = ["답변달기"];

const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const Top30Page = () => {
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
            <span>
              학교가 불편한 순간을
              <br />
              자유롭게 남겨주세요.
            </span>
            <S.LinkWrapper>
              <span>의견 남기기</span>
              <I.RightArrow />
            </S.LinkWrapper>
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
                <S.HasAnswerBtn>
                  <ViewModal
                    idx={top10.boardIdx}
                    state={"answer"}
                    buttonContent={"답변보기"}
                  />
                </S.HasAnswerBtn>
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
                <S.NoAnswerBtn>답변없음</S.NoAnswerBtn>
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

export default Top30Page;
