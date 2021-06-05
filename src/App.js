import { useState, useEffect } from "react";
import { auth } from './services/firebase'
import "./App.css";

import Header from './components/Header/Header'
import Login from './pages/Login/Login'

export default function App() {
  const [postState, setPost] = useState({
    posts: [{post: "Hello World"}],
    newPost: {
      post: "",
      content: ""
    },
  });

  useEffect(function(){
    async function getAppData(){
      const posts = await fetch('http://localhost:3001/api/posts')
      .then(res => res.json());

      setPost(prevState => ({
        ...prevState,
        posts
      }));
    }

    getAppData();
  
  }, []);

  async function handleSumbit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(postState.newPost)
    }).then(res => res.json())

    setPost({
      posts: [...postState.posts],
      newPost: {
        post: ""
      }
    });
  }

    function addPost(e) {
      e.preventDefault();
      postState({
        posts: [...postState.posts, postState.newPost],
        newPost: {
          post: ''
        }
      });
    }

    function handleChange(e) {
      setPost(prevState => ({
        posts: prevState.posts,
        newPost: {
          ...prevState.newPost,
          [e.target.name]: e.target.value
        }
      }));
    }


  return (
    <>
    <Login />
      <section>
        <hr />
        {postState.posts.map((p, i) =>(
          <article key={i}>
            <div>{p.post}</div>
          </article>
        ))}
        <form onSubmit={handleSumbit}>
          <label>
            <span>POST</span>
            <input name="post" value={postState.newPost.post} onChange={handleChange}/>
          </label>
        </form>
        <button value="submit">submit</button>
      </section>
    </>

  );


}



