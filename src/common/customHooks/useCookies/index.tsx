import { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import isEmpty from 'lodash/isEmpty';

type LoginCookie = {
  userId: string;
};

export enum CookieNames {
  UserId = 'user_id',
}

function useCookies() {
  const [cookiesString, setCookiesString] = useState<string>();

  useEffect(() => {
    cookieOnChange();
  }, []);

  const cookieOnChange = () => {
    const key = 'cookie';
    const documentPrototype = Object.getPrototypeOf(document);
    const target = Object.getPrototypeOf(documentPrototype);
    const setter = Object.getOwnPropertyDescriptor(target!, key)!.set;
    Object.defineProperty(target, key, {
      set: value => {
        setter!.call(document, value);
        setCookiesString(document.cookie);
      },
    });
  };

  const setLogin = ({ userId }: LoginCookie) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    const options = { path: '/', expires };

    cookie.save(CookieNames.UserId, userId, options);
  };

  const clearLogin = () => {
    cookie.remove(CookieNames.UserId);
  };

  const isAuthenticated = !isEmpty(cookie.load(CookieNames.UserId));

  return {
    setLogin,
    clearLogin,
    isAuthenticated,
    cookiesString,
  };
}

export default useCookies;
