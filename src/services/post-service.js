const BASE_URL = 'http://localhost:3001/api/posts';

async function fetchSkills(user) {
    // const token = await user.getIdToken();
    return fetch(BASE_URL).then(res => res.json());
}

async function createSkill(data, user) {
    // const token = await user.getIdToken();
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        //   'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({...data})
      }).then(res => res.json())
}

export {
    createSkill,
    fetchSkills,
}