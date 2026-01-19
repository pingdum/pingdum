import Cookies from "js-cookie";

const getCookie = (key: string) => {
  return Cookies.get(key) || "";
};

const setCookie = (
  key: string,
  value: string,
  options: Cookies.CookieAttributes = {},
) => {
  return Cookies.set(key, value, {
    domain: window.location.hostname,
    expires: 365,
    ...options,
  });
};

const deleteCookie = (key: string, options: Cookies.CookieAttributes = {}) => {
  return Cookies.remove(key, {
    domain: window.location.hostname,
    expires: 0,
    ...options,
  });
};

const deleteServerCookie = (
  key: string,
  options: Cookies.CookieAttributes = {},
) => {
  return Cookies.remove(key, {
    domain: "https://pingdum.vercel.app",
    expires: 0,
    ...options,
  });
};

// export module
const StorageUtils = {
  setCookie,
  getCookie,
  deleteCookie,
  deleteServerCookie,
};

export default StorageUtils;
