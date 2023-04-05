import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc } from 'firebase/firestore';
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
      e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        displayName: 'Cynthia Dike',
        username: 'DikeCynthia14',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://assets.webiconspng.com/uploads/2017/09/Avatar-PNG-Image-13248.png',
      });
      console.log('Tweet added with ID: ', docRef.id);
      setTweetMessage('');
      setTweetImage('');
    } catch (error) {
      console.error('Error adding tweet: ', error);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://assets.webiconspng.com/uploads/2017/09/Avatar-PNG-Image-13248.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
