import styled, { css } from "styled-components";

export const SystemCheckWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const DescWrapper = styled.span`
    color: #434C9C;
    font-size: 1rem;
    word-break: keep-all;
`;

export const ChaseCircleWrapper = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

// 아래의 함수는 각각 길이가 각각 다른 <circle> 에게 서로 다른 회전시간을 부여합니다.

const CircleRotation = () => {
    let style: string = "";

    for (let i = 1; i < 5; i += 1) {
        style += `
            &:nth-of-type(${i}) {
                animation-delay: -${i * 0.15}s;
            }
        `
    }
    
    return css`${style}`
}

export const ChaseCircleLoader = styled.svg`
    max-width: 48rem;
	width: 100%;
	height: auto;
	stroke-linecap: round;
    & circle {
	    fill: none;
	    stroke-width: 2.8;
	    animation-name: preloader;
	    animation-duration: 4s;
	    animation-iteration-count: infinite;
	    animation-timing-function: ease-in-out;
	    transform-origin: 170px 170px;
	    will-change: transform;

	    &:nth-of-type(1) {
	    	stroke-dasharray: 550px;
	    }

	    &:nth-of-type(2) {
	    	stroke-dasharray: 500px;
	    }

	    &:nth-of-type(3) {
	    	stroke-dasharray: 450px;
	    }

	    &:nth-of-type(4) {
	    	stroke-dasharray: 300px;
	    }
        
        // 위에서 선언했던 함수를 적용시킵니다.

        ${CircleRotation()}
	}

    @keyframes preloader {
	    50% {
	    	transform: rotate(360deg);
	    }
    }
`;