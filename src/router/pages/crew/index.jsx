import styled from 'styled-components';
import Text from '../../../styling/elements/Text';
import {
  colorType2,
  colorType3,
  hoverColor,
} from '../../../constant/colors/index.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useState } from 'react';
import { mediumWindowSize, smallWindowSize } from '../../../constant/window';

const crewInfos = [
  {
    name: 'Douglas Hurley',
    imagePath: 'assets/crew/image-douglas-hurley.png',
    images: {
      png: 'assets/crew/image-douglas-hurley.png',
      webp: 'assets/crew/image-douglas-hurley.webp',
    },
    role: 'Commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    name: 'Mark Shuttleworth',
    imagePath: '/assets/crew/image-mark-shuttleworth.png',
    images: {
      png: 'assets/crew/image-mark-shuttleworth.png',
      webp: './assets/crew/image-mark-shuttleworth.webp',
    },
    role: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    name: 'Victor Glover',
    imagePath: '/assets/crew/image-victor-glover.png',
    images: {
      png: './assets/crew/image-victor-glover.png',
      webp: './assets/crew/image-victor-glover.webp',
    },
    role: 'Pilot',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    name: 'Anousheh Ansari',
    imagePath: '/assets/crew/image-anousheh-ansari.png',
    images: {
      png: './assets/crew/image-anousheh-ansari.png',
      webp: './assets/crew/image-anousheh-ansari.webp',
    },
    role: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];

const CrewPage = () => {
  const [focusedCrew, setFocusedCrew] = useState(crewInfos[0]);

  const handlePageChanged = ({ activeIndex }) => {
    setFocusedCrew(crewInfos[activeIndex]);
  };
  return (
    <Container>
      <Title>
        <LeftTitle color={hoverColor}>02</LeftTitle>
        <RightTitle>MEET YOUR CREW</RightTitle>
      </Title>
      <Body>
        <LeftBody>
          <CrewBody>
            <StyledSwiper
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              onSlideChange={handlePageChanged}
            >
              {crewInfos.map((crewInfo) => {
                return (
                  <StyledSwiperSlide key={crewInfo.name}>
                    <CommanderTitle color={hoverColor}>
                      COMMANDER
                    </CommanderTitle>
                    <CrewName>{crewInfo.name.toUpperCase()}</CrewName>
                    <CrewDescription>
                      <Text.Body color={colorType2}>
                        {crewInfo.description}
                      </Text.Body>
                    </CrewDescription>
                  </StyledSwiperSlide>
                );
              })}
            </StyledSwiper>
          </CrewBody>
          <CrewFooter>
            {crewInfos.map((crewInfo) => {
              return (
                <PageIndex
                  focused={focusedCrew === crewInfo}
                  key={crewInfo.name}
                />
              );
            })}
          </CrewFooter>
        </LeftBody>
        <RightBody>
          <CrewImage src={focusedCrew.imagePath} />
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
    margin-top: 64px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    flex-direction: column;
    text-align: center;
  }
  @media (width <= ${smallWindowSize}px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;

  @media (width>=${mediumWindowSize}px) {
    margin-left: 12%;
    margin-right: 6%;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
  }
  @media (width <= ${smallWindowSize}px) {
    order: 1;
  }
`;
const RightBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
    height: 100%;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    height: 100%;
  }
  @media (width <= ${smallWindowSize}px) {
    height: 223px;
    order: 0;
  }
`;

const CrewImage = styled.img`
  @media (width>=${mediumWindowSize}px) {
    right: 13%;
    position: absolute;
    bottom: -100px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    font-size: 20px;
  }
  @media (width <= ${smallWindowSize}px) {
    height: 223px;
    object-fit: contain;
  }
`;

const Title = styled.div`
  display: flex;

  @media (width>=${mediumWindowSize}px) {
    margin-left: 12%;
    margin-bottom: 154px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-left: 12%;
    margin-bottom: 60px;
  }
  @media (width <= ${smallWindowSize}px) {
    align-self: center;
    margin-bottom: 32px;
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

const CommanderTitle = styled(Text.H4)`
  @media (width>=${mediumWindowSize}px) {
    margin-bottom: 15px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-bottom: 15px;
    font-size: 24px;
  }
  @media (width <= ${smallWindowSize}px) {
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

const CrewBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
    padding-bottom: 120px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    padding-bottom: 40px;
  }
  @media (width <= ${smallWindowSize}px) {
    order: 1;
  }
`;

const CrewName = styled(Text.H3)`
  margin-bottom: 14px;

  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    font-size: 40px;
  }
  @media (width <= ${smallWindowSize}px) {
    font-size: 24px;
  }
`;

const CrewDescription = styled.div`
  max-width: 455px;
  height: 100%;

  @media (width>=${mediumWindowSize}px) {
    > span {
      font-size: 16px;
    }
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    > span {
      font-size: 15px;
    }
  }
  @media (width <= ${smallWindowSize}px) {
    > span {
      font-size: 15px;
    }
  }
`;

const CrewFooter = styled.div`
  display: flex;

  @media (width>=${mediumWindowSize}px) {
    padding-bottom: 140px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    justify-content: center;
    align-items: center;
    :last-child {
      margin-right: 0px;
    }
    padding-bottom: 32px;
  }
  @media (width <= ${smallWindowSize}px) {
    justify-content: center;
    align-items: center;
    order: 0;
    :last-child {
      margin-right: 0px;
    }
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const StyledSwiper = styled(Swiper)`
  max-width: 60vw;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  @media (width>=${mediumWindowSize}px) {
  }
  @media (width<${mediumWindowSize}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PageIndex = styled.div`
  @media (width>=${mediumWindowSize}px) {
    width: 15px;
    height: 15px;
    margin-right: 24px;
    :last-child {
      margin-right: 0px;
    }
  }
  @media (width<${mediumWindowSize}px) {
    width: 10px;
    height: 10px;
    margin-right: 16px;
    :last-child {
      margin-right: 0px;
    }
  }
  border-radius: 100%;
  background-color: ${(props) => (props.focused ? colorType3 : hoverColor)};
`;

export default CrewPage;
