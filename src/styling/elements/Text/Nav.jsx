import styled from 'styled-components';

const Nav = styled.nav`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#fff'};
  letter-spacing: 2.7px;
`;

export default Nav;

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
