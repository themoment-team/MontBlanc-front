import * as S from "./style";

import { color } from "Shared/Config";
import { Logo } from "Asset/SVG";

const SystemCheck: React.FC = () => {
  return (
    <>
      <ChaseCircle />
      <S.SystemCheckWrapper>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.DescWrapper>
          죄송합니다 현재 서비스가 점검 중에 있습니다.
        </S.DescWrapper>
      </S.SystemCheckWrapper>
    </>
  );
};

const ChaseCircle: React.FC = () => {
  return (
    <S.ChaseCircleWrapper>
      <S.ChaseCircleLoader
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="160" stroke={color.systemLightGreen} />
        <circle cx="170" cy="170" r="135" stroke={color.systemBlue} />
        <circle cx="170" cy="170" r="110" stroke={color.systemLightGreen} />
        <circle cx="170" cy="170" r="85" stroke={color.systemBlue} />
      </S.ChaseCircleLoader>
    </S.ChaseCircleWrapper>
  );
};

export default SystemCheck;
