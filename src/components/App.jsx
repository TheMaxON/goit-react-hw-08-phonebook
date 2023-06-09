import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectError } from 'redux/contacts/selectors';
import Layout from './Layout';
import { useAuth } from 'hooks';
import Loader from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (error) return console.log('Error message: ', error);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/" />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
      </Route>
      <Route path="*" element={<Layout />}>
        <Route path="*" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
