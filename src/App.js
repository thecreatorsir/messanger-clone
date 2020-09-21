import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("enter your username"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((docs) => ({ id: docs.id, message: docs.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className='App'>
      <img
        src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
        alt='messangger-logo'
      />
      <h1>Facebook messanger clone</h1>
      <h2>hello {userName}</h2>
      <form className='app__form'>
        <FormControl className='app__formcontrol'>
          <InputLabel>message here....</InputLabel>
          <Input
            className='app__input'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='app__iconButton'
            disabled={!input}
            type='submit'
            variant='contained'
            color='primary'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
