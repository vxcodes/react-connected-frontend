import { useState, useEffect } from "react";
import { auth } from './services/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import Footer from './components/Footer/Footer'
import "./App.css";






export default function App() {





  const [userState, setUserState] = useState({
    user: null
  })

  // useEffect(function(){
  //   async function getAppData(){
  //     if(!props.user) return;

      
  //     const posts = await fetchPosts(props.user)
  //     .then(res => res.json());

  //     setPost(prevState => ({
  //       ...prevState,
  //       posts,
  //     }));
  //   }

    useEffect(function(){
 
      // Set up authentication observer
      const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));
  
      // clean up function
      return function() {
        //clean up subscriptions
        unsubscribe();
  
      }
    
    }, []);
  


  
  return (
    <>
      <div className="App">
        <Router>
          <Header user={userState.user}/>
          <Switch>   
            <Route path="/main" exact component={Main}/>    
            <Route path="/home" exact render={props => (<Home {...props} user={userState.user} /> )} /> 
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
    );
  }