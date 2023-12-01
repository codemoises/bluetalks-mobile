import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

const configureAxiosHeaders = () => {

}
const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState({});


  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem("auth");
      const authData = JSON.parse(authDataString || {});

      configureAxiosHeaders(authData.token, authData.phone);
      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };


  const setAuth = async (auth) => {
    try {
      await AsyncStorage.setItem("auth", JSON.stringify(auth));

      configureAxiosHeaders(auth.token, auth.phone);
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
