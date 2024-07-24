import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
const App = () => {
  const [username, setUserName] = useState('');
  const [chatActive, setChatActive] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100">
        {chatActive ? (
          <div>chat is here</div>
        ) : (
          <div className="w-screen h-screen flex justify-center items-center gap-2">
            <input
              type="text"
              name=""
              id=""
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="text-center px-3 py-2 outline-none border-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-3 py-2 rounded-md font-bold"
              onClick={() => {
                !username == '' && setChatActive(true);
              }}
            >
              Start chat
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
