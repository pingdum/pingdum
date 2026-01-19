"use client";

import StorageUtils from "@/utils/storage";

export default function LoginPage() {
  const handleLogin = () => {
    StorageUtils.setCookie("access_token", "dummy_token");
    const nextUrl = StorageUtils.getCookie("NEXT_URL") || "/";
    StorageUtils.deleteCookie("NEXT_URL", {
      domain: "",
    });
    window.location.href = nextUrl;
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
