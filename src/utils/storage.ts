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

const deleteCookie = (
  key: string,
  options: Cookies.CookieAttributes = {},
  domain?: string,
) => {
  // Set domain = "" if you are deleting a cookie set from the server
  return Cookies.remove(key, {
    domain: domain || window.location.hostname,
    expires: 0,
    ...options,
  });
};

// export module
const StorageUtils = {
  setCookie,
  getCookie,
  deleteCookie,
};

export default StorageUtils;
