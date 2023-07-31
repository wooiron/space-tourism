import logo from '/assets/shared/logo.svg';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavMenuList from './components/NavMenu/NavMenuList';
import { useState } from 'react';
import { useEffect } from 'react';
import { mediumWindowSize, smallWindowSize } from './constant/window';

const menuList = [
  { number: '00', name: 'HOME' },
  { number: '01', name: 'DESTINATION' },
  { number: '02', name: 'CREW' },
  { number: '03', name: 'TECHNOLOGY' },
  { number: '04', name: 'MAP' },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  const [backgroundImg, setBackgroundImg] = useState(
    '/assets/home/background-home-desktop.jpg',
  );

  const handleClickHanburger = () => {
    setIsOpen(!isOpen);
  };

  const getBackgroundImg = () => {
    const nowPage = pathname.split('/')[1];

    if (nowPage === 'home') {
      setBackgroundImg('/assets/home/background-home-desktop.jpg');
    } else if (nowPage === 'destination') {
      setBackgroundImg(
        '/assets/destination/background-destination-desktop.jpg',
      );
    } else if (nowPage === 'crew') {
      setBackgroundImg('/assets/crew/background-crew-desktop.jpg');
    } else if (nowPage === 'technology') {
      setBackgroundImg('/assets/technology/background-technology-desktop.jpg');
    }
  };

  useEffect(() => {
    getBackgroundImg();
  }, [pathname]);

  return (
    <Body background={backgroundImg}>
      <MenuIcon
        onClick={handleClickHanburger}
        src={
          !isOpen
            ? '/assets/shared/icon-hamburger.svg'
            : '/assets/shared/icon-close.svg'
        }
        visible={!isOpen}
      />
      <StarPoint />
      <Header visible={isOpen}>
        <HorizontalLine />
        <NavMenuList menuList={menuList} />
      </Header>
      <Outlet />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;

  background: ${(props) =>
    props.background
      ? `url(${props.background}) no-repeat center
    fixed`
      : "url('/assets/home/background-home-desktop.jpg') no-repeat center fixed"};

  background-size: cover;
`;

const MenuIcon = styled.img`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media (width <= ${smallWindowSize}px) {
    position: absolute;

    top: 33px;
    right: 26px;
    align-self: flex-end;
    display: flex;
    z-index: 10;
  }
`;

const Header = styled.div`
  position: relative;

  flex-direction: row;
  align-items: center;

  @media (width>=${mediumWindowSize}px) {
    display: flex;
    margin-left: 55px;
    height: 133px;
    padding-top: 40px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    display: flex;
    margin-left: 39px;
    height: 96px;
  }
  @media (width <= ${smallWindowSize}px) {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
  }
`;

const HorizontalLine = styled.div`
  height: 1px;

  background-color: #979797;
`;

const StarPoint = styled.img.attrs({
  src: `${logo}`,
})`
  margin-right: 64px;

  @media (width>=${mediumWindowSize}px) {
    position: absolute;
    margin-left: 55px;
    top: 64px;
    width: 48px;
    height: 48px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-left: 39px;
    position: absolute;
    top: 24px;
    width: 48px;
    height: 48px;
  }
  @media (width <= ${smallWindowSize}px) {
    width: 40px;
    height: 40px;
    margin-left: 24px;
    position: absolute;
    top: 24px;
  }
`;

export default App;
