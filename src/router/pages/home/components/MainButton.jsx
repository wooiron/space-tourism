import styled from 'styled-components';
import propTypes from 'prop-types';
import Text from '../../../../styling/elements/Text/index.jsx';
import { colorType1 } from '../../../../constant/colors/index.js';

const MainButton = ({ text }) => {
  return (
    <CircleWrapper>
      <Text.H4 color={colorType1}>{text}</Text.H4>
    </CircleWrapper>
  );
};

MainButton.propTypes = {
  text: propTypes.string,
  handleClick: propTypes.func,
};

const CircleWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 274px;
  height: 274px;
  background-color: #fff;
  border-radius: 100%;
  transition: outline 0.2s linear;
  //   box-sizing: content-box;
  outline: 0px solid rgba(255, 255, 255, 0.1);
  &:hover {
    cursor: pointer;
    outline-width: 88px;
  }
`;

export default MainButton;
