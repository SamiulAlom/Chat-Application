import "../style/Room.css";

export default function EnterRoom({ setRoom, roomInputRef }) {
  return (
    <div className="mainRoom">
      <label className="label">
        <i>Enter The Room Name :</i>
      </label>
      <div className="room">
        <input className="input" ref={roomInputRef} /> <br />
        <button
          onClick={() => setRoom(roomInputRef.current.value)}
          className="submit"
        >
          Enter Chat
        </button>
      </div>
    </div>
  );
}
