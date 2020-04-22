import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_SUCCEEDED } from '../store/types';

export function useAuthorisation(userSelector, deps) {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        dispatch({ type: LOGIN_SUCCEEDED, ...savedUser });
      }
    }
  }, deps);

  return user;
}