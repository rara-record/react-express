import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const StyledLayoutContainer = styled.div`
  margin-inline: auto;
  width: 90%;
`;

function Layout() {
  return (
    <StyledLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayoutContainer>
  );
}

export default Layout;
