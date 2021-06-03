import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [postState, setPost] = useState({
    posts: [{post: "Hello World"}]
  });

  useEffect(function(){
    function getAppData(){
      fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(data => console.log(data));
    }

    getAppData();

  }, []);

  return (
    <div className="App">
      <section>
        <hr />
        {postState.posts.map((p, i) =>(
          <article key={i}>
            <div>{p.post}</div>
          </article>
        ))}
        <form>
          <label>
            <span>POST</span>
            <input name="post" />
          </label>
        </form>
      </section>
    </div>
  );


}



