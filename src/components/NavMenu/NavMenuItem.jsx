import PropTypes from 'prop-types';
import Text from '../../styling/elements/Text';
import styled from 'styled-components';
import { hoverColor } from '../../constant/colors';
import { Link, useLocation } from 'react-router-dom';
import { mediumWindowSize, smallWindowSize } from '../../constant/window';

const NavMenuItem = ({ number = '', name = '' }) => {
  const { pathname } = useLocation();
  const compName = pathname.split('/')[1];

  return (
    <StyledLink
      isFocused={compName === name.toLowerCase()}
      to={`/${name.toLowerCase()}`}
    >
      <Number>{number}</Number>
      <Name>{name}</Name>
    </StyledLink>
  );
};

NavMenuItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  isFocused: PropTypes.bool,
  handleClick: PropTypes.func,
};

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;

  @media (width>${smallWindowSize}px) {
    align-items: center;
    justify-content: center;
    border: none;

    &:hover {
      cursor: pointer;
      border-bottom: 3px solid ${hoverColor};
    }
    border-bottom: ${(props) => {
      return props.isFocused ? '3px solid #fff !important' : 'none';
    }};
  }

  @media (width < ${smallWindowSize}px) {
    width: 100%;
  }
`;

const Number = styled(Text.Nav)`
  @media (width>=${mediumWindowSize}px) {
    margin-right: 11px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    display: none;
  }
  @media (width <= ${smallWindowSize}px) {
    margin-right: 11px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const Name = styled(Text.Nav)`
  @media (width <= ${smallWindowSize}px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export default NavMenuItem;
