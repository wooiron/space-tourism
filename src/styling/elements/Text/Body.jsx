import styled from 'styled-components';

const Body = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: ${(props) => props.fontSize || '18px'};
  color: ${(props) => props.color || '#fff'};
  line-height: 32px;
`;

export default Body;

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
