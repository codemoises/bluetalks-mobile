import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
const AuthContext = createContext({});

const configureAxiosHeaders = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState({});

  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem("auth");
      const authData = JSON.parse(authDataString || {});

      configureAxiosHeaders(authData.token);
      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };

  const setAuth = async (auth) => {
    try {
      await AsyncStorage.setItem("auth", JSON.stringify(auth));

      configureAxiosHeaders(auth.token);
      setAuthState(auth);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
