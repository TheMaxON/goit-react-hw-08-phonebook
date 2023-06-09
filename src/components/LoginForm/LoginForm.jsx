import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  InputContainer,
  Label,
  InputStyle,
  Button,
} from '../Form/Form.styled.jsx';
import PlusIcon from '@rsuite/icons/Check';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    event.target.reset();
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <Label htmlFor="email">
        E-mail
        <InputStyle
          type="email"
          name="email"
          placeholder="Enter your e-mail..."
          required
        />
      </Label>
      <Label htmlFor="password">
        Password
        <InputStyle
          type="password"
          name="password"
          placeholder="Enter your password..."
          minLength={6}
          title="Password must contain at least 6 characters and latin letters."
          required
        />
      </Label>
      <Button
        type="submit"
        appearance="primary"
        color="green"
        icon={<PlusIcon />}
      >
        Log in
      </Button>
    </InputContainer>
  );
};

export default LoginForm;
