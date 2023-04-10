import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className='home'>
          <a href="home">Home</a>
        </h2>
        <ul>
          <li className="homechild">
            <div>
              <a href="home">For you</a>
            </div>
          </li>

          <li className="homechild">
            <div>
              <a href="home">Following</a>
            </div>
          </li>
        </ul>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
