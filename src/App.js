import { useState, useEffect } from "react";
import { auth } from './services/firebase'
import { BrowserRouter } from 'react-router-dom'
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post/Post'
import Form from './components/Form/Form'
import { 
  fetchPosts,
  updatePost,
  createPost,
  deletePost } from "./services/post-service"
import "./App.css";

// import Header from './components/Header/Header'
import Login from './pages/Login/Login'

export default function App() {
  const [postState, setPost] = useState({
    posts: [],
    newPost: {
      userName: '',
      title: '',
      post: '',
    }
  });

  const [userState, setUserState] = useState({
    user: null
  })

  useEffect(function(){
    async function getAppData(){
      if(!userState.user) return;
      
      const posts = await fetchPosts('http://localhost:3001/api/posts')
      .then(res => res.json());

      setPost(prevState => ({
        ...prevState,
        posts
      }));
    }

    getAppData();
    // Set up authentication observer
    auth.onAuthStateChanged(user => setUserState({ user }));
  
  }, []);

  async function handleSubmit(e){
    e.preventDefault();

    if(postState.editMode){
      try{
        const posts = await updatePost(postState.newPost, userState.user);
        setPost({
          posts,
          editMode: false,
          newPost: {
            userName: '',
            title: '',
            post: '',
          }
        });
      } catch(error) {

      }
    } else {
      // Create a new skill
      try {
        const post = await createPost(postState.newPost, userState.user);

        setPost({
          posts: [...postState.posts, post],
          newPost: {
            userName: '',
            title: '',
            post: '',
          }
        });
      } catch(error){
        //do something so users dont freak out.
        console.log(error);
      }
    }
  }

  function handleChange(e){
    setPost(prevState => ({
      ...prevState,
      newPost: {
        ...prevState.newPost,
        [e.target.name]: e.target.value
      }
    }));
  }

  function handleEdit(id){
    const postToEdit = postState.posts.find(post => post._id === id);
    setPost(prevState => ({
      ...prevState,
      newPost: postToEdit,
      editMode: true
    }));
  }

  async function handleDelete(id){
    try{
      const posts = await deletePost(id, userState.user);
      setPost(prevState => ({
        ...prevState,
        posts
      }));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Login user={userState.user}/>
      <section>
        {userState.user ? postState.posts.map((p, i) => (
          <article key={i}>
            <div>p.userName</div>
            <div>p.title</div>
            <div>p.post</div>
            <div className="controls"
            onClick={() => handleEdit(p._id)}>
              {'📝'}
            </div>
            <div className="controls"
            onClick={() => handleDelete(p._id)}>
              {'🗑'}
            </div>
          </article>
        )) : 
          <article style={{padding: 15}}>No Posts to Show - Login to Get Started</article>
        }
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            <span>USER NAME</span>
            <input name="userName" value={postState.newPost.userName} onChange={handleChange} />
          </label>
          <label>
            <span>TITLE</span>
            <input name="title" value={postState.newPost.title} onChange={handleChange} />
          </label>
          <label>
            <span>POST</span>
            <input name="post" value={postState.newPost.post} onChange={handleChange} />
          </label>
          <button disabled={!userState.user}>{postState.editMode ? 'EDIT POST' : 'ADD POST'}</button>
        </form>
      </section>



      {/* <div>
        <div container justify="space-between" alignItems="stretch" spacing={3}>
          <div item xs={12} sm={7}>
            {postState.posts.map((post, idx) => {
              < Post key={idx} post={post} />
            })}
          </div>
          <div item xs={12} sm={4}>
            <Form />
          </div>
        </div>
      </div> */}
    </>
  );
}