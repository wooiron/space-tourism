import styled from 'styled-components';

const H4 = styled.h4`
  font-family: 'Bellefair', serif;
  font-size: ${(props) => props.fontSize || '32px'};
  color: ${(props) => props.color || '#fff'};
`;

export default H4;

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
