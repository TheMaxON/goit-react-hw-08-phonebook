import { useAuth } from 'hooks';
import { StyledAppBar, Nav, NavBtnPrimary, NavBtn } from './Navigation.styled';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar>
      <Nav>
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && (
          <>
            <NavBtn to="/login">Log in</NavBtn>
            <NavBtnPrimary to="/register">Sign up</NavBtnPrimary>
          </>
        )}
      </Nav>
    </StyledAppBar>
  );
};

export default Navigation;
