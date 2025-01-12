import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const ChatApp = () => {
  const userId = "1"; // Replace with the actual user ID after authentication
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  // Create a socket connection and send the user ID as a query parameter
  const socket = io("http://localhost:3500/chat", {
    query: { userId: '1' }
  });

  useEffect(() => {
    // Listen for the 'user-joined' event from the server
    socket.on('user-joined', (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: `${msg.message} (User ID: ${msg.userId})` },
      ]);
    });

    // Listen for incoming messages from the server
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup when the component is unmounted
    return () => {
      socket.off('message');
      socket.off('user-joined');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      // Emit the message to the server with the userId
      socket.emit('newMessage', { message, userId });
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Real Time Chat</h1>

        {/* Messages Container */}
        <div className="h-64 overflow-y-scroll p-4 mb-4 bg-gray-50 border rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2 text-gray-800">
              <p>{msg.message}</p>
              {msg.userId && <span className="text-gray-500">User ID: {msg.userId}</span>} {/* Display userId */}
            </div>
          ))}
        </div>

        {/* Message Input & Send Button */}
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="w-full p-2 border border-gray-300 rounded-lg mr-2"
          />
          <button
            type="button"
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
