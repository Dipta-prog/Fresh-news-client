import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Orders from './components/Orders/Orders';
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
// import Services from './components/Home/Services/Services';
// import Navbar from './components/Shared/Navbar/Navbar';
import NewsDetails from './components/NewsDetails/NewsDetails';
import { useEffect } from 'react';
import AllNews from './components/Body/News/AllNews/AllNews';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
    category: 'All',
  });
  const [requireLogin, setRequireLogin]= useState(false)
  console.log("Home:",loggedInUser.category)

useEffect(() => {
  if ((loggedInUser.category==="Sports") || (loggedInUser.category==="International")) {
    setRequireLogin(true)
  }
  else setRequireLogin(false);

}, [loggedInUser.category])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <AllNews/>
          </Route>
          {/*  */}

          {!requireLogin && <Route path="/view-more/:_id">
            <NewsDetails/>
          </Route>}
          {requireLogin && <PrivateRoute path="/view-more/:_id">
            <NewsDetails/>
          </PrivateRoute>}


          
          {/* <PrivateRoute path="/dashboard/:id">
            <DashBoard></DashBoard>
          </PrivateRoute> */}
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
