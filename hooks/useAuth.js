import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { login } from "services/user";

const cookies = new Cookies();

const initialState = {
  token: cookies.get("user") || null,
};

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(initialState);
  }, []);

  const logIn = async (user) => {
    const { username, password } = user;
    const { token } = await login(username, password);
    if (token) {
      cookies.set(
        "user",
        {
          token: token,
        },
        { path: "/" },
        { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) }
      );
      setUser({
        token: token,
      });
    } else {
      return false;
    }
  };

  const logOut = () => {
    cookies.remove("user", { path: "/" });
    setUser({ user: null });
  };

  return {
    user,
    logIn,
    logOut,
  };
};

export default useAuth;
