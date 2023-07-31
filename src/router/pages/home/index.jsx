import styled from 'styled-components';
import Text from '../../../styling/elements/Text';
import { colorType2 } from '../../../constant/colors/index.js';
import MainButton from './components/MainButton';
import { Link } from 'react-router-dom';
import {
  mediumWindowSize,
  smallWindowSize,
} from '../../../constant/window/index.js';

const HomePage = () => {
  return (
    <Container>
      <Body>
        <LeftBody>
          <Title color={colorType2}>SO, YOU WANT TO TRAVLE TO</Title>
          <MainTitle>SPACE</MainTitle>
          <TextBodyWarpper>
            <Description color={colorType2}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Description>
          </TextBodyWarpper>
        </LeftBody>
        <RightBody>
          <StyledLink to="/destination">
            <MainButton text="EXPLORE" />
          </StyledLink>
        </RightBody>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Body = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  margin-top: 15%;

  @media (width>=${mediumWindowSize}px) {
    justify-content: space-between;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
  }
  @media (width<${mediumWindowSize}px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 30%;
    text-align: center;
    /* & h5,
    h1,
    span {
      text-align: center;
    } */
  }
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

const Title = styled(Text.H5)`
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-bottom: 24px;
  }

  @media (width <= ${smallWindowSize}px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const MainTitle = styled(Text.H1)`
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-bottom: 24px;
  }
  @media (width <= ${smallWindowSize}px) {
    font-size: 80px;
    margin-bottom: 16px;
  }
`;

const TextBodyWarpper = styled.div`
  @media (width>=${mediumWindowSize}px) {
    width: 90%;
  }
  @media (width <${mediumWindowSize}px) {
    display: flex;
    justify-content: center;
    align-self: center;

    width: 90%;
  }
`;

const Description = styled(Text.Body)`
  @media (width <${mediumWindowSize}px) {
    font-size: 16px;
  }
`;

const RightBody = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  @media (width>=${mediumWindowSize}px) {
    justify-content: flex-end;
    align-self: flex-end;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-top: 156px;
    padding-bottom: 90px;
    align-self: center;
  }
  @media (width <=${smallWindowSize}px) {
    margin-top: 156px;
    padding-bottom: 90px;
    align-self: center;
  }
`;

export default HomePage;
