import { useContext, useEffect, useState, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";
import Loading from "../components/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  //   To login the user
  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      //   console.log("accountDetails", accountDetails);
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  //   To logout the user and set thier session to null
  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
    console.log("session ended");
  };
  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      );

      await account.createEmailSession(userInfo.email, userInfo.password1);
      let accountDetails = await account.get();
      // console.log("accountDetails", accountDetails);
      setUser(accountDetails);
      // navigate("/");
    } catch (error) {
      console.log("An error occured while registering", error);
    }
    setLoading(false);
  };

  //   To check status of user if logged in or not in order to persist their deatails to maintain session
  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}
    setLoading(false);
  };
  const contextData = { user, loginUser, logoutUser, registerUser };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
