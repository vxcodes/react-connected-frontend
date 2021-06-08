import React, { useState, useEffect } from 'react'
import {createPost, fetchPost} from '../../services/post-service'





function Form(props){

    return (

        <form id="input-form" method="POST">
          <label>User Name
            <input type="string" name="userName" />
          </label>
          <label>Title
            <input type="string" name="title" />
          </label>
          <label>Post
            <input type="string" name="post" />
          </label>
          <input type="submit"  value="create a post"/>
        </form>

    )
}

export default Form