const BASE_URL = 'http://localhost:3001/api/posts';



async function fetchPosts(user) {
  return fetch(BASE_URL).then(res => res.json());
}

async function updatePost({ post, _id }, user) {
    return fetch(`${BASE_URL}/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({ post })
      }).then(res => res.json());
}

async function createComment(data){
  return(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({...data})
  }).then(res => res.json())
}

async function createPost(data, user) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({...data, uid: user.uid})
      }).then(res => res.json())
}


async function deletePost(postId, user) {

    return fetch(`${BASE_URL}/${postId}`, {
        method: 'DELETE',
    }).then(res => res.json());
}


export {
    fetchPosts,
    updatePost,
    createPost,
    deletePost,
    createComment,
}