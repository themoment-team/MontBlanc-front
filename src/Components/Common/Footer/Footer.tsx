import * as S from "./styled";
import * as I from "../../../Asset/Svg/index";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <I.Logo />
      <S.LineTextWrapper>
        <S.LineText>
          <b>
            Production:
          </b>
          Seorin Lee, Sunwoo Lee, Ji-hwan Jeon, Siwon Jeong, Yewon Jin
        </S.LineText>
        <S.LineText>
          <b>
            Inquiry and email:
          </b>
          official.themoment.team@gmail.com
        </S.LineText>
        <S.LineText>
          <b>
            Github and issue:
          </b>
          https://github.com/theMomentTeam
        </S.LineText>
      </S.LineTextWrapper>
      <S.LineText>
        © 2021, the_moment_team
      </S.LineText>
    </S.Footer>
  );
};

export default Footer;
