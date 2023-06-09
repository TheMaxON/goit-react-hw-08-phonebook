import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserLogin, NavBtn } from '../Navigation/Navigation.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserLogin>{user.email}</UserLogin>
      <NavBtn onClick={() => dispatch(logOut())}>Logout</NavBtn>
    </>
  );
};

export default UserMenu;
