import styled from 'styled-components';

const Sub2 = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: ${(props) => props.fontSize || '14px'};
  color: #fff;
  letter-spacing: 2.35px;
  color: ${(props) => props.color || '#fff'};
`;

export default Sub2;

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
