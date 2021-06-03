import { useState, useEffect } from "react";
import "./App.css";

import Header from './components/Header/Header'

export default function App() {
  const [postState, setPost] = useState({
    posts: [{post: "Hello World"}]
  });

  useEffect(function(){
    function getAppData(){
      fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(data => postState(prevState => ({
        posts: data,
        ...prevState
      })));
    }

    getAppData();

    function addPost(e) {
      e.preventDefault();
      postState({
        posts: [...postState.posts, postState.newPost],
        newPost: {
          post: ''
        }
      });
    }

  }, []);

  return (
    <>
    <Header />
      <section>
        <hr />
        {postState.posts.map((p, i) =>(
          <article key={i}>
            <div>{p.post}</div>
          </article>
        ))}
        <form>
          <label>
            <span>POST</span>
            <input name="post" />
          </label>
        </form>
      </section>
    </>

  );


}



