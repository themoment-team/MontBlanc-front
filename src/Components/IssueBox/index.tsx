import * as I from '../../Asset/SVG';
import * as S from './styled';

import React, { Fragment } from 'react';

interface issueBoxProps {
  idx: number;
  content: string;
}

const randomColorPicker = () => {
  const color: string[] = [
    '#CBD9E266',
    '#C4DFDB',
    '#A7C5EB66',
    '#61799866',
    '#699CAC66',
  ];

  const randomNumber: number = Math.floor(Math.random() * 5);

  return color[randomNumber];
};

const issueBox: React.FC<issueBoxProps> = (p: issueBoxProps) => {
  const randomColor = randomColorPicker();

  return (
    <S.IssueBoxStyle color={randomColor}>
      <S.IssueBoxHeading>
        <I.IssueSvg />
        <S.IssueNumber>{p.idx}번째 불편함</S.IssueNumber>
      </S.IssueBoxHeading>
      <S.Issue>
        {p.content.split('\n').map((content: string, index) => {
          return (
            <Fragment key={index}>
              {content}
              <br />
            </Fragment>
          );
        })}
      </S.Issue>
    </S.IssueBoxStyle>
  );
};

export default React.memo(issueBox);
