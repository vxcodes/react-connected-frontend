import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import {createPost, fetchPost} from '../../services/post-service'

// import FileBase from 'react-file-base64'

import useStyles from './styles'


function Form(props){
    // const [postData, setPostData] = useState({userName: '', title: '', post: ''})
    const classes = useStyles();

    // useEffect(function(){
    //     async function getAppData(){
    //       const posts = await fetch('http://localhost:3001/api/posts')
    //       .then(res => res.json());
    
    //       setPostData(prevState => ({
    //         ...prevState,
    //         posts
    //       }));
    //     }
    
    //   getAppData();
      
    // }, []);
    
    // async function handleSumbit(e) {
    //     e.preventDefault();
    //     fetch('http://localhost:3001/api/posts', {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'Application/json'
    //       },
    //       body: JSON.stringify(postData.newPost)
    //     }).then(res => res.json())
    
    //     setPostData({
    //       posts: [...postData.posts],
    //       newPost: {
    //         userName: "",
    //         title: "",
    //         post: "",
    //       }
    //     });
    // }

    const [postData, setPostData] = useState({
      posts: [{ userName: "" , title: "", post: "" }],
      newPost: {
        userName: "",
        title: "",
        post: ""
      },
      editMode: false
    });
  
  
    useEffect(function() {
      async function getAppData() {
        const posts = await fetchPost(postData.post)
        setPostData(prevState => ({
          ...prevState,
          posts
        }));
      }
      getAppData();
    })
  
    async function handleSubmit(e) {
      // if(!userState.user) return;
  
      e.preventDefault();
  
      if(postData.editMode == false) {
        try {
          const post = await createPost(postData.newPost);
      
          setPostData({
            posts: [...postData.posts, post],
            newPost: {
              userName: '',
              title: '',
              post: ''
            }
          });
          
        } catch (error) {
          // do something else so my users don't freak out 😄
          console.log(error);
        }
      }
    }

    return (
        // <Paper className = {classes.paper}>
        //     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
        //         <Typography variant="h6"></Typography>
        //         <TextField name="userName" variant="outlined" label="UserName" fullWidth value={postData.userName} onChange={(e) => setPostData({ ...postData, userName: e.target.value })} />
        //         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        //         <TextField name="post" variant="outlined" label="Post" fullWidth value={postData.post} onChange={(e) => setPostData({ ...postData, post: e.target.value })} />
        //         {/* <div className={classes.fileInput}><FileBase type= "file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/></div> */}
        //         <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>SUBMIT</Button>
        //     </form>
        // </Paper>

        <form id="input-form" method="POST">
          <label>User Name
            <input type="text" name="userName" />
          </label>
          <label>Title
            <input type="text" name="title" />
          </label>
          <label>Post
            <input type="text" name="post" />
          </label>
          <input type="submit"  value="create a post"/>
        </form>

    )
}

export default Form