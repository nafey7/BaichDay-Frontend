import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

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
        socket.emit('chat message', input, localStorage.getItem('userID'), '63f9c20b6bd601d9c5d370a4');
        // 63f9c20b6bd601d9c5d370a4
        // 63fb43b61d67ea7b3813108d
        // 63fb4cc568c8cb9fd155b69e
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