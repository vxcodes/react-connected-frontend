const BASE_URL = 'http://localhost:3001/api/posts';



async function fetchPosts(user) {
    const token = await user.getIdToken();
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(res => res.json());
}

async function updatePost({ post, _id }, user) {
    const token = await user.getIdToken();
    return fetch(`${BASE_URL}/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ post })
      }).then(res => res.json());
}

async function createPost(data, user) {
    const token = await user.getIdToken();
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({...data, uid: user.uid})
      }).then(res => res.json())
}


async function deletePost(postId, user) {
    const token = await user.getIdToken();

    return fetch(`${BASE_URL}/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json());
}


export {
    fetchPosts,
    updatePost,
    createPost,
    deletePost
}