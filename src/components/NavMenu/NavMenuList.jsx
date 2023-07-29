import styled from 'styled-components';
import NavMenuItem from './NavMenuItem';
import PropTypes from 'prop-types';
import { smallWindowSize } from '../../constant/window';

const NavMenuList = ({ menuList = [] }) => {
  return (
    <Body>
      <Wrapper>
        {menuList.map(({ number, name }) => {
          return <NavMenuItem key={name} number={number} name={name} />;
        })}
      </Wrapper>
    </Body>
  );
};

NavMenuList.propTypes = {
  menuList: PropTypes.array,
};

const Body = styled.div`
  display: flex;

  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);

  // margin right 은 화면 크기에 따라 다르게 해줘야함

  @media (width>${smallWindowSize}px) {
    align-items: center;
    justify-content: center;
    width: 60vw;
    height: 100%;

    padding-right: 30px;
    margin-left: auto;
  }

  @media (width <= ${smallWindowSize}px) {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 67vw;
    min-height: 100vh;
    height: 100%;

    padding-top: 118px;
    padding-left: 32px;
    z-index: 3;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media (width>${smallWindowSize}px) {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }

  @media (width <= ${smallWindowSize}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default NavMenuList;
