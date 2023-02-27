import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import io from 'socket.io/node_modules/socket.io-client';


function MoizChat() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [userID, setuserID] = useState('');
  
    useEffect(() => {
      const newSocket = io('http://localhost:8000');
      setSocket(newSocket);
  
      return () => newSocket.close();
    }, []);
  
    useEffect(() => {
        const userIDStorage = localStorage.getItem('userID');
        if (userIDStorage) {
        setuserID(userIDStorage);
        }

      if (socket) {
        socket.emit('userConnected', userID);

        socket.on('chat message', (msg) => {
          setMessages((messages) => [...messages, msg]);
        });
      }
    }, [socket]);
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (input) {
        socket.emit('chat message', input);
        setInput('');
      }
    };
  
    return (
      <div>
        <h1>Chat</h1>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };
  

export default MoizChat;
