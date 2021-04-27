import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../Constants/GlobalStyle/Detail";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";
import { heading, explanation, top10, list } from "./Top10Container";
import { useEffect, useState } from "react";

const Top10Page = () => {
  const [list, setList] = useState<list[]>([
    { boardIdx: 0, content: "", goods: 0 },
  ]);
  useEffect(() => {
    top10().then((res) => setList(res.data.list));
  }, []);
  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation heading={heading} explanation={explanation} />
        <S.Btn>
          <Link to="/Leave_opinion">의견 남기기</Link>
        </S.Btn>
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
