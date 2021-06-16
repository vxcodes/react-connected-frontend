import { useState, useEffect } from "react";
import { auth } from './services/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Post from './components/Post/Post'
import Header from './components/Header/Header'
import "./App.css";

import { 
  fetchPosts,
  updatePost,
  createPost,
  deletePost,
createComment } from "./services/post-service"



// import Header from './components/Header/Header'


export default function App() {
  const [postState, setPost] = useState({
    posts: [],
    comments:[],
    newPost: {
      post: '',
      comments: []
    }
  });




  const [userState, setUserState] = useState({
    user: null
  })

  useEffect(function(){
    async function getAppData(){
      if(!userState.user) return;

      
      const posts = await fetchPosts(userState.user)
      .then(res => res.json());

      setPost(prevState => ({
        ...prevState,
        posts,
      }));
    }

    getAppData();
    // Set up authentication observer
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    // clean up function
    return function() {
      //clean up subscriptions
      unsubscribe();

    }
  
  }, []);

  async function handleSubmit(e){
    if(!userState.user) return;

    e.preventDefault();
    
    if(postState.editMode){
      try{
        const posts = await updatePost(postState.newPost, userState.user);
        const comments = await updatePost(postState.newPost, userState.user);
        setPost({
          posts,
          comments,
          editMode: false,
          newPost: {
            post: '',
            comments: []
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
          comments: [...postState.comments],
          newPost: {
            post: '',
            comments: []
          }
        });
      } catch(error){
        //do something so users dont freak out.
        console.log(error);
      }
    }
  }

  async function handleCommentSubmit(e){
    const comment = await createPost(postState.newPost, userState.user);

    setPost({
      posts: [...postState.posts],
      comments: [...postState.comments],
      newPost: {
        post: '',
        comments: [...postState.comments, comment]
      }
    });
  }

  // async function handleCommentSubmit(e){
  //   this.setPost({
  //     comments: this.postState.newPost.comments.concat(e.target.value)
  //   })
  // }

  // async function handleCommentChange(e){
  //   const post = await createPost(postState.newPost, userState.user);
  //   const comment = await createComment(postState.newPost.comments, userState.user);
  //   setPost({
  //     posts: [...postState.posts],
  //     comments: [...postState.newPost.comments, comment],
  //     newPost: {
  //       post: '',
  //       comments: []
  //     }
  //   });
  // }


  async function handleChange(e){
    setPost(prevState => ({
      ...prevState,
      newPost: {
        ...prevState.newPost,
        [e.target.name]: e.target.value,
        
      },

    }));
  }


  async function handleEdit(id){
    if(!userState.user) return;
    const postToEdit = postState.posts.find(post => post._id === id);

    setPost(prevState => ({
      ...prevState,
      newPost: postToEdit,
      editMode: true
    }));
  }

  async function handleDelete(id){
    if(!userState.user) return;
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
      <div className="App">
        <Router>
          <Header user={userState.user}/>
          <Switch>       
            <Route path="/" exact render={props => (<Home {...props} user={userState.user} /> )} />          
            // {/* <Route path="/" exact component={Home}/> */}
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        </Router>
      </div>
     <section>
      <form className="post-form" onSubmit={handleSubmit}>
          <label>
            <input className="new-post" name="post" value={postState.newPost.post} onChange={handleChange} />
          </label>
          <button className="post-button" disabled={!userState.user}>{postState.editMode ? 'EDIT POST' : 'POST'}</button>
      </form>

      {userState.user ? postState.posts.map((p, i) => (
        <article className="main-post-box" key={i}>
          <Post
            post={p.post} comment={p.comments.comment}
          />
          <button className="controls"
          onClick={() => handleEdit(p._id)}>
            {'📝'}
          </button>
          <button className="controls"
          onClick={() => handleDelete(p._id)}>
            {'🗑'}
          </button>
          <form className="add-comment-form"  onSubmit={handleCommentSubmit} >
            <label>Comment:
            <input  name="comment" method="PUT" value={postState.newPost.comments.comment} onChange={handleChange}/>
            </label>
            <button type="button" className="comment-button" disabled={!userState.user}>{'REACT'}</button>
          </form>
          <>
          {userState.user ? postState.comments.map((c, i) => (
            <p>{c.comment}</p>
          )):
            <article>No Comments</article>
          }
          </>

       </article>
      )) : 
        <article style={{padding: 15}}>No Posts to Show - Login to Get Started</article>
      }
      <hr />
      </section> 
    </>
    );
  }