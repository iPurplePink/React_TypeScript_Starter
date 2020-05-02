import React, { useEffect } from 'react';
import useCookies from '../../../common/customHooks/useCookies';
import { useHistory } from 'react-router-dom';

function LoginCallback() {
  const history = useHistory();
  const { setLogin } = useCookies();

  useEffect(() => {
    setLogin({ userId: 'id' });
    history.replace('/profile');
  }, [setLogin, history]);

  return (
    <section className="login-callback-section">
      Logging in, please wait...
    </section>
  );
}

export default LoginCallback;
