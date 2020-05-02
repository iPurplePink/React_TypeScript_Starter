import React, { useEffect } from 'react';
import useCookies from '../../../common/customHooks/useCookies';
import { useHistory } from 'react-router-dom';

function LogoutCallback() {
  const history = useHistory();
  const { clearLogin } = useCookies();

  useEffect(() => {
    clearLogin();
    history.replace('/home');
  }, [clearLogin, history]);

  return (
    <section className="login-callback-section">
      Logging out, please wait...
    </section>
  );
}

export default LogoutCallback;
