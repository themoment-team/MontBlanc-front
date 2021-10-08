import { PageExplanation } from "../PageExplanation";
import { useHistory } from "react-router-dom";
import ImprovmentItemPresenter from "./ImprovmentItem";
import { useState, useEffect } from "react";
import * as S from "./styled";
import * as I from "../../Asset/SVG";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import Config from "Constants/Config.json";
import { EditModal } from "Components/Modals";
import Improvement from "Api/improvement";

export interface list {
  content: string;
  title: string;
  improveIdx: number;
}

const improvement = () => {
  const res = Improvement.viewImprovment();
  return res;
};

const heading: string[] = ["실제 개선 사례"];
const adminHeading: string[] = ["실제 개선 사례 작성"];

const explanation: string[] = [
  "다양한 의견을 남겨주셔서 정말 감사합니다.",
  "여러분들이 남겨주신 의견들을 바탕으로 하나하나 개선해나가고 있습니다.",
  "앞으로도 학교가 불편한 순간이 있다면 자유롭게 의견을 남겨주세요.",
];

const ImprovmentPage: React.FC = () => {
  const [list, setList] = useState<list[]>([]);
  const logged = useRecoilValue(HasAdminToken);
  const history = useHistory();

  useEffect(() => {
    improvement().then((res) => setList(res.data.list));
  }, []);

  return (
    <S.ImprovmentPageBox>
      <S.LeftBox>
        <PageExplanation
          heading={!logged ? heading : adminHeading}
          explanation={explanation}
        />
        {logged ? (
          <S.Btn>
            <EditModal
              idx={1}
              state="improvment"
              heading="작성하기"
              ButtonContent={"실제 개선 사례 작성하기"}
            />
            <span>
              <I.RightArrow />
            </span>
          </S.Btn>
        ) : (
          <S.Btn onClick={() => history.push(Config.LINK.COMMENT)}>
            학교가 불편한 순간을
            <br /> 자유롭게 남겨주세요.
            <S.LinkTextWrapper>
              <span>의견 남기기</span>
              <I.RightArrow />
            </S.LinkTextWrapper>
          </S.Btn>
        )}
      </S.LeftBox>
      <div>
        {list.length < 1 && (
          <S.AltImprovementItem>
            현재 등록된 개선사례가 없어요
            <small>There are currently no registered improvements</small>
          </S.AltImprovementItem>
        )}
        {list.map((improvement: list, index) => (
          <ImprovmentItemPresenter
            header={improvement.title}
            content={improvement.content}
            idx={improvement.improveIdx}
            key={index}
          />
        ))}
      </div>
    </S.ImprovmentPageBox>
  );
};

export default ImprovmentPage;
