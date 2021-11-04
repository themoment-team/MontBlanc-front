import { LeftBox } from "Components";
import GoodBtn from "../GoodBtn";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
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
  const [list, setList] = useState<list[]>([]);

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

  return (
    <S.TopTenWrapper>
      <LeftBox
        heading={!logged ? heading : adminHeading}
        explanation={explanation}
      />
      <S.RightBox>
        {list.map((rank: list, index) => (
          <S.TenIssues key={rank.uncomfortableIdx}>
            <span>
              <span>{index + 1}위</span>
              <article>{rank.content.replace(/^\s+|\s+$/gm, "")}</article>
            </span>
            <span>
              {rank.answer ? (
                <S.HasAnswerBtn>
                  <ViewModal
                    idx={rank.uncomfortableIdx}
                    state={"answer"}
                    buttonContent={"답변보기"}
                  />
                </S.HasAnswerBtn>
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
                <S.NoAnswerBtn>답변없음</S.NoAnswerBtn>
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
