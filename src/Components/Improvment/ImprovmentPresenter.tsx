import { PageExplanation } from "../PageExplanation";
import { useHistory } from "react-router-dom";
import ImprovmentItemPresenter from "./ImprovmentItem/ImprovmentItemPresenter";
import { useState, useEffect } from "react";
import { improvement, list } from "./ImprovmentContainer";
import * as S from "./styled";
import * as I from "../../Asset/SVG";
import * as C from "./ImprovmentContainer";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import { useModal } from "Context/Modal";
import Config from "Constants/Config.json";

const ImprovmentPage: React.FC = () => {
  const [list, setList] = useState<list[]>([]);
  const modal = useModal();
  const logged = useRecoilValue(HasAdminToken);
  const history = useHistory();

  useEffect(() => {
    improvement().then((res) => setList(res.data.list));
  }, []);

  return (
    <S.ImprovmentPageBox>
      <S.LeftBox>
        <PageExplanation
          heading={!logged ? C.heading : C.adminHeading}
          explanation={C.explanation}
        />
        {logged ? (
          <S.Btn
            onClick={() => modal.open("EditModal", 1, "improvment", "작성하기")}
          >
            실제 개선 사례 작성하기
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
            header={improvement.improveHeader}
            content={improvement.improveContent}
            idx={improvement.improveIdx}
            key={index}
          />
        ))}
      </div>
    </S.ImprovmentPageBox>
  );
};

export default ImprovmentPage;
