import { useState, useEffect } from "react";
import { auth } from './services/firebase'
import { BrowserRouter } from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './components/images/styles'
import "./App.css";

// import Header from './components/Header/Header'
import Login from './pages/Login/Login'

export default function App() {
  const classes = useStyles();
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

  // async function handleSumbit(e) {
  //   e.preventDefault();
  //   fetch('http://localhost:3001/api/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'Application/json'
  //     },
  //     body: JSON.stringify(postState.newPost)
  //   }).then(res => res.json())

  //   setPost({
  //     posts: [...postState.posts],
  //     newPost: {
  //       post: ""
  //     }
  //   });
  // }

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
      <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories
          </Typography>
          <img className={classes.image} src="" alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}