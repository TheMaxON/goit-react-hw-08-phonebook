import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  InputContainer,
  Label,
  InputStyle,
  Button,
} from '../Form/Form.styled.jsx';
import PlusIcon from '@rsuite/icons/Check';

const RegisterForm = () => {
  const [userLogin, setLogin] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'login':
        setLogin(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    // if (
    //   !contacts.find(
    //     contact =>
    //       contact.name.toLowerCase().trim() === contactName.toLowerCase().trim()
    //   )
    // ) {
    //   dispatch(addContacts({ name: contactName, phone: contactNumber }));
    // } else {
    //   alert(`${contactName} is already in contacts`);
    // }
    reset();
  };

  const reset = () => {
    setLogin('');
    userEmail('');
    userPassword('');
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <Label htmlFor="login">
        Login
        <InputStyle
          type="text"
          name="login"
          value={userLogin}
          placeholder="Create your login..."
          onChange={onChange}
          minLength={3}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Login may contain only letters, apostrophe, dash and spaces. And be at least 3 characters long."
          required
        />
      </Label>
      <Label htmlFor="email">
        E-mail
        <InputStyle
          type="email"
          name="email"
          value={userEmail}
          placeholder="Enter your e-mail..."
          onChange={onChange}
          pattern="[a-zA-Zа-яА-Я0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </Label>
      <Label htmlFor="password">
        Password
        <InputStyle
          type="password"
          name="password"
          value={userPassword}
          placeholder="Create your password..."
          onChange={onChange}
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
