import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const cookie = JSON.parse(getCookie("vsHealth"));
    console.log(cookie);
    axios
      .post("http://localhost:3000/user/authenticate", cookie)
      .then((response) => {
        console.log(response.data);
        if (response.data === 0) setLoggedIn(true);
        else setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
