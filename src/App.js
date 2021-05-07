import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  

  useEffect (() => {
    // runs once when the app loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    });
  },[])
  
  useEffect (()=> {
    setUsername (prompt('Please enter your name'));
  },[])

  const sendMessage = (event) =>{
    event.preventDefault();
    //logic to send message
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="" />
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>
        <form className = "app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="enter a message..." value={input} onChange={e=> setInput(e.target.value)} />

          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
          
        </form>
      
      <FlipMove>
      {
        messages.map(({id, data}) => (
          <Message key={id} username={username} message={data} />
        ))
      }
      </FlipMove>
      

    </div>
  );
}

export default App;
