export default function Head({ text, room, signOutUser }) {
  return (
    <div className="header">
      <p className="text">
        {" "}
        {text} {room ? room.toUpperCase() : ""}{" "}
      </p>
      <span>
        {signOutUser ? (
          <div className="signOut">
            <button className="signOut-btn" onClick={signOutUser}>
              Sign Out
            </button>
          </div>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
