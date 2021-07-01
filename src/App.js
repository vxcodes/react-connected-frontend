import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Messages from './pages/Messages/Messages';
import './App.css';

export default function App() {
  const [userState, setUserState] = useState({
    user: null,
  });

  useEffect(function () {
    // Set up authentication observer
    const unsubscribe = auth.onAuthStateChanged((user) =>
      setUserState({ user })
    );

    // clean up function
    return function () {
      //clean up subscriptions
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Header user={userState.user} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route
              path="/home"
              exact
              render={(props) => <Home {...props} user={userState.user} />}
            />
            <Route path="/profile" exact component={Profile} />
            <Route path="/messages" exact component={Messages} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}
