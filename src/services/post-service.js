const BASE_URL = 'https://react-connected-backend.herokuapp.com/api/posts';



async function fetchPosts() {
  return fetch(BASE_URL).then(res => res.json());
}


async function updatePost({ post, comment,  _id }) {
    return fetch(`${BASE_URL}/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({ post, comment })
      }).then(res => res.json());
}

async function createComment({comments, _id}) {
  return fetch(`${BASE_URL}/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Applications/json',
    },
    body: JSON.stringify({ comments })
  }).then(res => res.json());
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
    createComment
}