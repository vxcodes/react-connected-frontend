import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Newsbox from '../../components/Newsbox/Newsbox';
import Post from '../../components/Post/Post';
import '../../App.css';

import {
  fetchPosts,
  updatePost,
  createPost,
  deletePost,
  createComment,
} from '../../services/post-service';

function Home(props) {
  const [postState, setPost] = useState({
    posts: [],
    comments: [],
    newPost: {
      post: '',
      comments: [],
    },
  });

  useEffect(function () {
    async function getAppData() {
      if (!props.user) return;

      const posts = await fetchPosts(props.user).then((res) => res.json());

      setPost((prevState) => ({
        ...prevState,
        posts,
      }));
    }
  });

  async function handleSubmit(e) {
    if (!props.user) return;
    e.preventDefault();
    if (postState.editMode) {
      try {
        const posts = await updatePost(postState.newPost, props.user);
        const comments = await updatePost(postState.newPost, props.user);
        setPost((prevState) => ({
          ...prevState,
          posts,
          comments,
          editMode: false,
          newPost: {
            post: '',
            comments: [],
          },
        }));
      } catch (error) {}
    } else {
      // Create a new skill
      try {
        const post = await createPost(postState.newPost, props.user);

        setPost({
          posts: [...postState.posts, post],
          comments: [...postState.comments],
          newPost: {
            post: '',
            comments: [],
          },
        });
      } catch (error) {}
    }
  }

  async function handleCommentSubmit(e) {
    const comment = await updatePost(postState.newPost, props.user);

    setPost({
      posts: [...postState.posts],
      comments: [...postState.comments],
      newPost: {
        post: [...postState.posts],
        comments: [...postState.comments, comment],
      },
    });
  }

  async function handleChange(e) {
    setPost((prevState) => ({
      ...prevState,
      newPost: {
        ...prevState.newPost,
        [e.target.name]: e.target.value,
      },
    }));
  }
  async function handleCommentChange(e) {
    setPost((prevState) => ({
      ...prevState,
      newPost: {
        ...prevState.newPost,
        [e.target.name]: e.target.value,
      },
    }));
  }

  async function handleEdit(id) {
    if (!props.user) return;
    const postToEdit = postState.posts.find((post) => post._id === id);

    setPost((prevState) => ({
      ...prevState,
      newPost: postToEdit,
      editMode: true,
    }));
  }

  async function handleDelete(id) {
    if (!props.user) return;
    try {
      const posts = await deletePost(id, props.user);
      setPost((prevState) => ({
        ...prevState,
        posts,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const [newsState, setNews] = useState({
    next: null,
    previous: null,
    results: [],
  });

  useEffect(function () {
    if (!props.user) return;
    async function getAndSetAppData() {
      const data = await fetch(
        'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=mGwR13rTsGscWrbPUVcKDaGbflhbVUAi'
      ).then((res) => res.json());

      setNews(data);
    }
    getAndSetAppData();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className={styles.heading}>Homepage</h1>
        </div>
        <Sidebar className={styles.sidebar} user={props.user} />
        <Newsbox
          className={styles.newsbox}
          newsData={newsState}
          user={props.user}
        />
      </div>
      <section>
        <form className='post-form' onSubmit={handleSubmit}>
          <label>
            <input
              className='new-post'
              name='post'
              value={postState.newPost.post}
              onChange={handleChange}
            />
          </label>
          <button className='post-button' disabled={!props.user}>
            {postState.editMode ? 'EDIT POST' : 'POST'}
          </button>
        </form>

        {props.user ? (
          postState.posts.map((p, i) => (
            <article className='main-post-box' key={i}>
              <Post post={p.post} comment={p.comments} />
              <button className='controls' onClick={() => handleEdit(p._id)}>
                {'📝'}
              </button>
              <button className='controls' onClick={() => handleDelete(p._id)}>
                {'🗑'}
              </button>
              <form className='add-comment-form' onSubmit={handleCommentSubmit}>
                <label>
                  Comment:
                  <input
                    name='comment'
                    method='PUT'
                    value={postState.newPost.comments}
                    onChange={handleCommentChange}
                  />
                </label>
                <button className='comment-button' disabled={!props.user}>
                  {'REACT'}
                </button>
              </form>
              {props.user ? (
                postState.comments.map((c, i) => <p key={i}>{c.comment}</p>)
              ) : (
                <article>No Comments</article>
              )}
            </article>
          ))
        ) : (
          <article style={{ padding: 15 }}>
            No Posts to Show - Login to Get Started
          </article>
        )}
        <hr />
      </section>
    </>
  );
}

export default Home;
