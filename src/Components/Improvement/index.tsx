import ImprovementItemPresenter from "./ImprovementItem";
import { useState, useEffect } from "react";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import Improvement from "Api/improvement";
import { LeftBox } from "Components";

export interface list {
  content: string;
  title: string;
  improveIdx: number;
}

const improvement = async () => {
  return await Improvement.getImprovement();
};

const heading: string[] = ["실제 개선 사례"];
const adminHeading: string[] = ["실제 개선 사례 작성"];

const explanation: string[] = [
  "다양한 의견을 남겨주셔서 정말 감사합니다.",
  "여러분들이 남겨주신 의견들을 바탕으로 하나하나 개선해나가고 있습니다.",
  "앞으로도 학교가 불편한 순간이 있다면 자유롭게 의견을 남겨주세요.",
];

const ImprovementPage: React.FC = () => {
  const [list, setList] = useState<list[]>([]);
  const logged = useRecoilValue(HasAdminToken);

  useEffect(() => {
    improvement().then((res) => setList(res.data.list));
  }, []);

  return (
    <S.ImprovementPageBox>
      <LeftBox
        heading={!logged ? heading : adminHeading}
        explanation={explanation}
      />
      <div>
        {list.length < 1 && (
          <S.AltImprovementItem>
            현재 등록된 개선사례가 없어요
            <small>There are currently no registered improvements</small>
          </S.AltImprovementItem>
        )}
        {list.map((improvement: list, index) => (
          <ImprovementItemPresenter
            header={improvement.title}
            content={improvement.content}
            idx={improvement.improveIdx}
            key={index}
          />
        ))}
      </div>
    </S.ImprovementPageBox>
  );
};

export default ImprovementPage;
