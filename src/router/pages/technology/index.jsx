import styled from 'styled-components';
import Text from '../../../styling/elements/Text';
import {
  colorType1,
  colorType2,
  colorType3,
  hoverColor,
} from '../../../constant/colors';

import { useState } from 'react';
import { mediumWindowSize, smallWindowSize } from '../../../constant/window';

const technologyInfos = [
  {
    name: 'Launch vehicle',
    images: {
      portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'Spaceport',
    images: {
      portrait: './assets/technology/image-spaceport-portrait.jpg',
      landscape: './assets/technology/image-spaceport-landscape.jpg',
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    name: 'Space capsule',
    images: {
      portrait: './assets/technology/image-space-capsule-portrait.jpg',
      landscape: './assets/technology/image-space-capsule-landscape.jpg',
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const TechnologyPage = () => {
  const [focusedTechnology, setFocusedTechnology] = useState(
    technologyInfos[0],
  );

  const handleClick = (value) => {
    setFocusedTechnology(value);
  };

  return (
    <Container>
      <Title>
        <LeftTitle color={hoverColor}>03</LeftTitle>
        <RightTitle>SPACE LAUNCH 101</RightTitle>
      </Title>
      <Body>
        <LeftBody>
          <ButtonList>
            {technologyInfos.map((value, index) => {
              return (
                <ButtonItem
                  key={value.name}
                  focused={focusedTechnology === value}
                  onClick={() => handleClick(value)}
                >
                  <Text.H4
                    color={
                      focusedTechnology === value ? colorType1 : colorType3
                    }
                  >
                    {index + 1}
                  </Text.H4>
                </ButtonItem>
              );
            })}
          </ButtonList>
          <TechnologyBody>
            <TechnologyTitle color={colorType2}>
              THE TERMINOLOGY...
            </TechnologyTitle>
            <TechnologyName>
              {focusedTechnology.name.toUpperCase()}
            </TechnologyName>
            <TechnologyDescriptionWrapper>
              <Text.Body color={colorType2}>
                {focusedTechnology.description}
              </Text.Body>
            </TechnologyDescriptionWrapper>
          </TechnologyBody>
        </LeftBody>
        <RightBody>
          <TechnologyImg
            minBackground={focusedTechnology.images.landscape}
            maxBackground={focusedTechnology.images.portrait}
          />
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
    justify-content: space-between;

    margin-top: 64px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    flex-direction: column;
    margin-top: 60px;
    padding-bottom: 100px;
  }
  @media (width <= ${smallWindowSize}px) {
    flex-direction: column;

    margin-top: 32px;
    padding-bottom: 100px;
  }
`;

const LeftBody = styled.div`
  display: flex;
  @media (width>=${mediumWindowSize}px) {
    flex-direction: row;

    margin-left: 12%;
    margin-right: 6%;
  }
  @media (width<${mediumWindowSize}px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    order: 1;
  }
`;
const RightBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
  }
  @media (width<${mediumWindowSize}px) {
    width: 100%;
    order: 0;
  }
`;

const ButtonList = styled.div`
  display: flex;

  @media (width>=${mediumWindowSize}px) {
    flex-direction: column;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-top: 56px;
    flex-direction: row;
  }
  @media (width <= ${smallWindowSize}px) {
    margin-top: 34px;
    flex-direction: row;
  }
`;

const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.focused ? colorType3 : 'rgba(0, 0, 0, 0)'};
  border: 1px solid ${hoverColor};
  border-radius: 100%;

  @media (width>=${mediumWindowSize}px) {
    width: 80px;
    height: 80px;
    margin-bottom: 32px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    width: 60px;
    height: 60px;
    margin-right: 16px;
    > h4 {
      font-size: 24px;
    }
  }
  @media (width <= ${smallWindowSize}px) {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    > h4 {
      font-size: 16px;
    }
  }

  :last-child {
    margin-bottom: 0px;
  }
  &:hover {
    cursor: pointer;
    border-color: white;
  }
`;

const TechnologyBody = styled.div`
  @media (width>=${mediumWindowSize}px) {
    margin-left: 80px;
  }
  @media (width<${mediumWindowSize}px) {
    margin-top: 44px;
  }
`;

const TechnologyTitle = styled(Text.Nav)`
  @media (width>=${mediumWindowSize}px) {
    margin-bottom: 11px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-bottom: 16px;
  }
  @media (width <= ${smallWindowSize}px) {
    margin-bottom: 9px;
    font-size: 14px;
  }
`;
const TechnologyName = styled(Text.H3)`
  @media (width>=${mediumWindowSize}px) {
    margin-bottom: 17px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    margin-bottom: 16px;
  }
  @media (width <= ${smallWindowSize}px) {
    margin-bottom: 16px;
    font-size: 24px;
  }
`;
const TechnologyDescriptionWrapper = styled.div`
  @media (width>=${mediumWindowSize}px) {
    max-width: 444px;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    max-width: 444px;
  }
  @media (width <= ${smallWindowSize}px) {
    max-width: 90vw;
    > span {
      font-size: 15px;
    }
  }
`;

const TechnologyImg = styled.div`
  @media (width>=${mediumWindowSize}px) {
    width: 515px;
    height: 527px;

    position: relative;
    bottom: 101px;
    right: 0px;
    background-image: url(${(props) => props.maxBackground || null});
    background-size: cover;
  }
  @media (${smallWindowSize}px <width < ${mediumWindowSize}px) {
    min-width: ${mediumWindowSize};
    width: 100%;
    height: 310px;
    background-image: url(${(props) => props.minBackground || null});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (width <= ${smallWindowSize}px) {
    min-width: ${smallWindowSize};
    width: 100%;
    height: 170px;
    background-image: url(${(props) => props.minBackground || null});
    background-repeat: no-repeat;
    background-size: cover;
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

export default TechnologyPage;
