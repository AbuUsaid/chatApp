import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
const App = () => {
  const [username, setUserName] = useState('');
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      message: newMessage,
      user: username,
      time:
        new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes,
    };

    socket.emit('send-message', messageData);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
        {chatActive ? (
          <div>
            <h1>Chat App</h1>
            <div>
              <div></div>
              <form className="flex gap-2 md:gap-4 " onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="rounded-md border-2 outline-none px-3 py-2"
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-green-500 text-white rounded-md font-bold "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
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
