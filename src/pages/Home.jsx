import { useAuth } from 'hooks';
import {
  GreetingsWrapper,
  Slogan,
  Description,
} from 'components/Home/Home.styled';
import { NavBtnPrimary, NavBtn } from 'components/Navigation/Navigation.styled';

const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <GreetingsWrapper>
      {isLoggedIn && <Slogan>Welcome, {user.name}</Slogan>}
      {!isLoggedIn && <Slogan>Easiest way to manage your contacts.</Slogan>}
      <Description>
        Unleash endless possibilities of online contacts management. 📱
      </Description>
      {isLoggedIn && (
        <NavBtnPrimary to="/contacts">Your Phonebook ▶</NavBtnPrimary>
      )}
      {!isLoggedIn && (
        <>
          <NavBtn to="/login">Log in</NavBtn>
          <NavBtnPrimary to="/register">Sign up</NavBtnPrimary>
        </>
      )}
    </GreetingsWrapper>
  );
};

export default Home;
