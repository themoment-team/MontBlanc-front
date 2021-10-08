import * as S from "./styled";
import * as I from "../../../Asset/SVG/index";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <I.Logo />
      <S.LineTextWrapper>
        <S.LineText>
          <b>Production:</b>
          Seolin Lee, Sunwoo Lee, Sihyeon Song, ChangGyu Im, Jihwan Jeon, Siwon
          Jeong, Yewon Jin
        </S.LineText>
        <S.LineText>
          <b>Inquiry and email:</b>
          official.themoment.team@gmail.com
        </S.LineText>
        <S.LineText>
          <b>Github and issue:</b>
          https://github.com/theMomentTeam
        </S.LineText>
      </S.LineTextWrapper>
      <S.LineText>© 2021, the_moment_team</S.LineText>
    </S.Footer>
  );
};

export default Footer;
