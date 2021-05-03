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


const ImprovmentPage: React.FC = () => {
  const [list, setList] = useState<list[]>([{ content: "", header: "" }]);
  const modal = useModal();
  const logged = useRecoilValue(HasAdminToken);
  
  useEffect(() => {
    improvement().then((res) => setList(res.data.list));
  }, []);


  return (
    <S.ImprovmentPageBox>
      <S.LeftBox>
        <PageExplanation heading={!logged ? C.heading : C.adminHeading} explanation={C.explanation} />
        {logged ?
          <S.Btn onClick={() => modal.open("EditModal", 1, "실제 개선 사례 작성")}>
            실제 개선 사례 작성하기
            <span>
              <I.RightArrow />
            </span>
          </S.Btn> :
          <S.Btn>
            학교가 불편한 순간을
            <br /> 자유롭게 남겨주세요.
            <Link to="/Leave_opinion">
              의견 남기기
              <I.RightArrow />
            </Link>
          </S.Btn>
        }
      </S.LeftBox>
      <div>
        {list.map((improvement: list) => (
          <ImprovmentItemPresenter
            color="#C3D7DE"
            header={improvement.header}
            content={improvement.content}
          /> // 여기 물어봐야 합니다.
        ))}
      </div>
    </S.ImprovmentPageBox>
  );
};

export default ImprovmentPage;
