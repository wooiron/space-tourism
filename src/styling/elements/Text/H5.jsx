import styled from 'styled-components';

const H5 = styled.h5`
  font-family: 'Barlow', sans-serif;
  font-size: ${(props) => props.fontSize || '28px'};
  color: ${(props) => props.color || '#fff'};
  letter-spacing: 4.75px;
`;

export default H5;

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
