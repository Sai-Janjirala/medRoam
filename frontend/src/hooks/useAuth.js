import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/slices/authSlice';

/**
 * useAuth – centralized authentication hook
 * Usage:
 *   const { user, isAuthenticated, login, logoutUser } = useAuth();
 */
const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  const login = (userData) => {
    // userData should be { user: {...}, token: '...' }
    dispatch(loginSuccess(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { user, token, isAuthenticated, login, logoutUser };
};

export default useAuth;
