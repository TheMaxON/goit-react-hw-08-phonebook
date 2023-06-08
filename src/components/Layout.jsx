import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledAppBar,
  Nav,
  NavBtnPrimary,
  NavBtn,
} from 'components/AppBar/AppBar.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <StyledAppBar>
        <Nav className="nav">
          <NavBtn to="/login">Log in</NavBtn>
          <NavBtnPrimary to="/register">Sign up</NavBtnPrimary>
        </Nav>
      </StyledAppBar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
