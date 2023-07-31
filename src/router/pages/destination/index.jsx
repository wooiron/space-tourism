import styled from 'styled-components';
import Text from '../../../styling/elements/Text';
import { colorType2, hoverColor } from '../../../constant/colors/index.js';
import { useState } from 'react';
import { mediumWindowSize, smallWindowSize } from '../../../constant/window';

const destinationInfos = [
  {
    imagePath: '/assets/destination/image-moon.png',
    name: 'MOON',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travelTime: '3 DAYS',
  },
  {
    imagePath: '/assets/destination/image-mars.png',
    name: 'MARS',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. km',
    travelTime: '9 months',
  },
  {
    imagePath: '/assets/destination/image-europa.png',
    name: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. km',
    travelTime: '3 years',
  },
  {
    imagePath: '/assets/destination/image-titan.png',
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. km',
    travelTime: '7 years',
  },
];

const DestinationPage = () => {
  const [focusedPlanet, setFocusedPlanet] = useState(destinationInfos[0]);
  const planetNames = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

  const handleClick = (name) => {
    const tmp = destinationInfos.find(
      ({ name: compName }) => compName === name,
    );
    setFocusedPlanet({ ...tmp });
  };
  return (
    <Container>
      <Title>
        <LeftTitle color={hoverColor}>01</LeftTitle>
        <RightTitle>PICK YOUR DESTINATION</RightTitle>
      </Title>
      <Body>
        <LeftBody>
          <PlanetImage src={focusedPlanet.imagePath} />
        </LeftBody>
        <RightBody>
          <PlanetHeader>
            <PlanetList>
              {planetNames.map((name) => {
                return (
                  <PlanetListItem
                    onClick={() => handleClick(name)}
                    focused={name === focusedPlanet.name}
                    key={name}
                  >
                    <PlanetListItemText
                      focused={name === focusedPlanet.name}
                      color={colorType2}
                    >
                      {name}
                    </PlanetListItemText>
                  </PlanetListItem>
                );
              })}
            </PlanetList>
          </PlanetHeader>
          <PlanetBody>
            <PlanetName>{focusedPlanet.name}</PlanetName>
            <PlanetDescription color={colorType2}>
              {focusedPlanet.description}
            </PlanetDescription>
          </PlanetBody>
          <PlanetFooter>
            <FooterWrapper>
              <PlanetFooterTitle>AVG. DISTANCE</PlanetFooterTitle>
              <PlanetFooterValue>{focusedPlanet.distance}</PlanetFooterValue>
            </FooterWrapper>
            <FooterWrapper>
              <PlanetFooterTitle>EST. TRAVEL TIME</PlanetFooterTitle>
              <PlanetFooterValue>{focusedPlanet.travelTime}</PlanetFooterValue>
            </FooterWrapper>
          </PlanetFooter>
        </RightBody>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: white; */
  /* display: flex;
  flex-direction: row; */
  display: flex;
  flex-direction: column;

  padding-top: 76px;
`;

const Body = styled.div`
  display: flex;

  @media (width>=${mediumWindowSize}px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 64px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
  }
  @media (width <= ${smallWindowSize}px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 32px;
  }
`;

const LeftBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
    margin-right: 12%;
  }
  @media (width<${mediumWindowSize}px) {
    display: flex;
    justify-content: center;
  }
`;
const RightBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
    max-width: 445px;
  }
  @media (width<${mediumWindowSize}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 53px;
    padding-left: 97px;
    padding-right: 97px;
    text-align: center;
  }
`;

const PlanetImage = styled.img`
  @media (width>=${mediumWindowSize}px) {
    align-self: flex-end;
    width: 445px;
    height: 445px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    width: 300px;
    height: 300px;
  }
  @media (width <= ${smallWindowSize}px) {
    width: 170px;
    height: 170px;
  }
`;

const Title = styled.div`
  display: flex;

  @media (width>=${mediumWindowSize}px) {
    margin-left: 12%;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-left: 12%;
  }
  @media (width <= ${smallWindowSize}px) {
    align-self: center;
    > h5,
    span {
      font-size: 16px;
    }
  }
`;

const LeftTitle = styled(Text.H5)`
  font-weight: bold;
  @media (width>=${mediumWindowSize}px) {
    margin-right: 28px;
  }
  @media (width<${mediumWindowSize}px) {
    margin-right: 19px;
    font-size: 20px;
  }
`;

const RightTitle = styled(Text.H5)`
  @media (width>=${mediumWindowSize}px) {
  }
  @media (width<${mediumWindowSize}px) {
    font-size: 20px;
  }
`;

const PlanetList = styled.div`
  display: flex;
  @media (width>=${mediumWindowSize}px) {
  }
  @media (width<${mediumWindowSize}px) {
    justify-content: center;
  }
`;

const PlanetListItem = styled.div`
  padding-bottom: 15px;

  height: 100%;
  @media (width>=${mediumWindowSize}px) {
    margin-right: 35px;
  }
  @media (width<${mediumWindowSize}px) {
    margin-right: 26px;
    :last-child {
      margin-right: 0px;
    }
  }

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${hoverColor};
  }
  border-bottom: ${(props) => {
    return props.focused
      ? '3px solid #fff !important'
      : '3px solid rgba(0,0,0,0.0)';
  }};
`;

const PlanetListItemText = styled(Text.Nav)`
  color: ${(props) => (props.focused ? '#fff' : hoverColor)};

  @media (width <= ${smallWindowSize}px) {
    font-size: 14px;
  }
`;

const PlanetHeader = styled.div`
  margin-bottom: 37px;
`;
const PlanetBody = styled.div`
  padding-bottom: 54px;
  border-bottom: 1px solid ${hoverColor};
`;

const PlanetName = styled(Text.H2)`
  margin-bottom: 14px;
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    font-size: 80px;
  }
  @media (width <= ${smallWindowSize}px) {
    font-size: 56px;
  }
`;

const PlanetDescription = styled(Text.Body)`
  @media (width <= ${smallWindowSize}px) {
    font-size: 15px;
  }
`;

const PlanetFooter = styled.div`
  display: flex;

  padding-top: 28px;
  @media (width>=${mediumWindowSize}px) {
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    /* flex-direction: column; */
    justify-content: space-around;
    padding-bottom: 62px;
  }
  @media (width <=${smallWindowSize}px) {
    flex-direction: column;
    padding-bottom: 62px;
  }
`;

const FooterWrapper = styled.div`
  @media (width>=${mediumWindowSize}px) {
    margin-right: 79px;
    :last-child {
      margin-right: 0px;
    }
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
  }
  @media (width <=${smallWindowSize}px) {
    margin-bottom: 32px;
    :last-child {
      margin-right: 0px;
    }
  }
`;

const PlanetFooterTitle = styled(Text.Sub2)`
  margin-bottom: 12px;
  color: ${colorType2};
`;

const PlanetFooterValue = styled(Text.Sub1)``;

export default DestinationPage;
