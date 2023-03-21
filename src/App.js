import { useRef, useState } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Head from "./Header";
import Cookies from "universal-cookie";
import EnterRoom from "./components/EnterRoom";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
const cookies = new Cookies();

function App() {
  const [isAuth, setisAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signOutUser = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setisAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="App">
        <Head text="Sign Up For Enter The Application" />
        <Auth setisAuth={setisAuth} />
      </div>
    );
  }

  return (
    <>
      <div className="chatRoom">
        {room ? (
          <>
            <Head signOutUser={signOutUser} room={room} text="Room Name : " />
            <Chat room={room} />
          </>
        ) : (
          <>
            <Head
              signOutUser={signOutUser}
              text="Welcome To Sam Chat Application"
            />
            <EnterRoom roomInputRef={roomInputRef} setRoom={setRoom} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
