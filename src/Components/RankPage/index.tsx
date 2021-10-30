import { PageExplanation } from "../PageExplanation";
import { useHistory } from "react-router-dom";
import { LeftBox } from "../../Constants/Styles/Detail";
import GoodBtn from "../GoodBtn";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import Config from "Constants/Config.json";
import { EditModal, ViewModal } from "Components/Modals";
import Table from "Api/table";
import { useEffect, useState } from "react";

interface list {
  uncomfortableIdx: number;
  content: string;
  goods: number;
  answer: boolean;
}

const useRank = () => {
  const [list, setList] = useState<list[]>([
    { uncomfortableIdx: 0, content: "", goods: 0, answer: false },
  ]);

  const getRank = async () => {
    return await Table.GetRankTable();
  };

  useEffect(() => {
    getRank().then((res) => setList(res.data.list));
  }, []);
  return list;
};

const heading: string[] = ["학교가 불편한 순간", "TOP 30"];
const adminHeading: string[] = ["답변달기"];

const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const RankPage = () => {
  const list = useRank();
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
        {list.map((rank: list, index) => (
          <S.TenIssues key={rank.uncomfortableIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{rank.content.replace(/^\s+|\s+$/gm, "")}</article>
            </span>
            <span>
              {rank.answer ? (
                <ViewModal
                  idx={rank.uncomfortableIdx}
                  state={"answer"}
                  buttonContent={"답변보기"}
                />
              ) : logged ? (
                <EditModal
                  idx={rank.uncomfortableIdx}
                  state={"answer"}
                  ButtonContent={"답변달기"}
                  heading={"답변달기"}
                  title={
                    rank.content.replace(/^\s+|\s+$/gm, "") + "불편함 답변"
                  }
                />
              ) : (
                <button>답변없음</button>
              )}
              <GoodBtn
                Background={false}
                Goods={rank.goods}
                Idx={rank.uncomfortableIdx}
              />
            </span>
          </S.TenIssues>
        ))}
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default RankPage;
