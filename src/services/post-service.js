const BASE_URL = 'https://react-connected-backend.herokuapp.com/api/posts';



async function fetchPosts() {
  return fetch(BASE_URL).then(res => res.json());
}


function updatePost({ posts, comments,  uid }) {
    return fetch(`${BASE_URL}/${uid}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({ posts, comments })
      }).then(res => res.json());
}

async function createComment({comments, uid}) {
  return fetch(`${BASE_URL}/${uid}`, {
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


async function deletePost(postId, uid) {

    return fetch(`${BASE_URL}/${postId}?uid=${uid}`, {
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