const BASE_URL = 'http://localhost:3001/api/posts';

async function fetchPost(data) {
    return fetch(BASE_URL).then(res => res.json());
}

async function createPost(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({...data})
      }).then(res => res.json())
}

export {
    createPost,
    fetchPost,
}