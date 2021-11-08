import * as S from "./style";
import * as I from "../../../Asset/SVG/index";

const Footer: React.FC = () => {
  const tm_member = [
    "ChangGyu",
    "Jihwan",
    "Seolin",
    "Sihyeon",
    "Siwon",
    "Sunwoo",
    "Yewon",
  ];
  return (
    <S.Footer>
      <I.Logo />
      <S.LineTextWrapper>
        <S.LineText>
          <b>Production:</b>
          {tm_member.sort().join(", ")}
        </S.LineText>
        <S.LineText>
          <b>Inquiry and email:</b>
          official.themoment.team@gmail.com
        </S.LineText>
        <S.LineText>
          <b>Github and issue:</b>
          https://github.com/themoment-team
        </S.LineText>
      </S.LineTextWrapper>
      <S.LineText>© 2021, the_moment_team</S.LineText>
    </S.Footer>
  );
};

export default Footer;
