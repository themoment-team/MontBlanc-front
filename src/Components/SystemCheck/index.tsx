import * as S from "./styled";

import { Logo } from "Asset/SVG"

interface SystemCheckProps {
    text?: string;
}

const SystemCheck: React.FC<SystemCheckProps> = ({text = "죄송합니다 현재 서비스가 점검 중에 있습니다"}) => {
    return (
        <>
            <ChaseCircle />
            <S.SystemCheckWrapper>
                <S.LogoWrapper>
                    <Logo />
                </S.LogoWrapper> 
                <S.DescWrapper>
                    {text}
                </S.DescWrapper>
            </S.SystemCheckWrapper>
        </>
    );
}

const ChaseCircle: React.FC = () => {
    return (
        <S.ChaseCircleWrapper>
	        <S.ChaseCircleLoader xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
		        <circle cx="170" cy="170" r="160" stroke="#E7F2F1"/>
		        <circle cx="170" cy="170" r="135" stroke="#434C9C"/>
		        <circle cx="170" cy="170" r="110" stroke="#E7F2F1"/>
		        <circle cx="170" cy="170" r="85" stroke="#434C9C"/>
	        </S.ChaseCircleLoader>
	    </S.ChaseCircleWrapper>
    );
}

export default SystemCheck;