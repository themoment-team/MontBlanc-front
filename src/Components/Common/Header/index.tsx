import * as S from './styled';
import * as I from '../../../Asset/SVG/index';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { HasAdminToken } from 'Atom';
import { useEffect, useState } from 'react';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Config from 'Constants/Config.json';
import { useSetRecoilState } from 'recoil';
import admin from 'Api/admin';
import { useHistory } from 'react-router';

const useLogout = () => {
  const setHasToken = useSetRecoilState(HasAdminToken);
  const history = useHistory();
  const tryLogout = async () => {
    try {
      await admin.logout();
      localStorage.removeItem('themoment_token');
      localStorage.removeItem('themoment_token_refresh');
      setHasToken(false);
    } catch (e) {
      alert(e);
    }
    history.push('/');
  };

  return tryLogout;
};

const Header: React.FC = () => {
  const tryLogout = useLogout();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);
  const [bars, setBars] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('themoment_token')) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  });

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to={Config.LINK.COMMENT}>
          <S.Logo>
            <I.Logo />
          </S.Logo>
          <S.Title>학교가 불편한 순간</S.Title>
        </Link>
        <S.BarWrapper>
          <FontAwesomeIcon
            icon={bars ? faBars : faChevronUp}
            onClick={() => setBars(!bars)}
          />
        </S.BarWrapper>
      </S.HeaderContainer>
      {!logged ? (
        <S.HeaderNav active={bars}>
          <Link to={Config.LINK.COMMENT}>의견 남기기</Link>
          <Link to={Config.LINK.RANK}>Top 30</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례</Link>
          <Link to={Config.LINK.ABOUT}>캠페인 자세히 보기</Link>
        </S.HeaderNav>
      ) : (
        <S.HeaderNav active={bars}>
          <Link to={Config.LINK.RANK}>답변달기</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례 작성</Link>
          <S.NavButton
            onClick={() => {
              tryLogout();
            }}
          >
            로그아웃
          </S.NavButton>
        </S.HeaderNav>
      )}
    </S.Header>
  );
};

export default Header;
