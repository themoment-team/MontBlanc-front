import * as S from "./styled";

import { Logo } from "Asset/SVG"

interface SystemCheckProps {
    text?: string;
}

const SystemCheck: React.FC<SystemCheckProps> = ({text = "죄송합니다 현재 서비스가 점검 중에 있습니다"}) => {
    return (
        <S.SystemCheckWrapper>
            <S.LogoWrapper>
                <Logo />
            </S.LogoWrapper> 
            <S.DescWrapper>
                {text}
            </S.DescWrapper>
        </S.SystemCheckWrapper>
    );
}

export default SystemCheck;