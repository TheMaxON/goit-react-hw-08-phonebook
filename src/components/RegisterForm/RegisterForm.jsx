import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  InputContainer,
  Label,
  InputStyle,
  Button,
} from '../Form/Form.styled.jsx';
import PlusIcon from '@rsuite/icons/Check';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    event.target.reset();
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <Label htmlFor="name">
        Name
        <InputStyle
          type="text"
          name="name"
          placeholder="Enter your name..."
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </Label>
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
          placeholder="Create your password..."
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
        Sign up
      </Button>
    </InputContainer>
  );
};

export default RegisterForm;
