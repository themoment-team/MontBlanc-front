import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import ImprovmentItemPresenter from "./improvmentItem/improvmentItemPresenter";
import { useState, useEffect } from "react";
import { improvement, list } from "./imporvmentContainer";
import * as S from "./styled";
import * as I from "../../Asset/SVG";
import * as C from "./imporvmentContainer";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import { useModal } from "Context/Modal";
import Config from "Constants/Config.json";

const ImprovmentPage: React.FC = () => {
  const [list, setList] = useState<list[]>([]);
  const modal = useModal();
  const logged = useRecoilValue(HasAdminToken);

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
          <S.Btn>
            학교가 불편한 순간을
            <br /> 자유롭게 남겨주세요.
            <Link to={Config.LINK.COMMENT}>
              의견 남기기
              <I.RightArrow />
            </Link>
          </S.Btn>
        )}
      </S.LeftBox>
      <div>
        {list &&
          <S.AltImprovementItem>
            현재 등록된 개선사례가 없어요
            <small>
              There are currently no registered improvements
            </small>
          </S.AltImprovementItem>
        }
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
