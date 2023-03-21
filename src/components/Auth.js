import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "../style/Auth.css";

const cookies = new Cookies();

export const Auth = ({ setisAuth }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setisAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p className="authHead">Sign In with Google to Continue</p>
      <button className="btn" onClick={handleSignIn}>
        Sign In{" "}
      </button>
    </div>
  );
};
