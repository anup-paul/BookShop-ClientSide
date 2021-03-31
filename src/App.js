import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddBook from './Components/AddBook/AddBook';
import ManageBook from './Components/ManageBokk/ManageBook';
import CheckOut from './Components/CheckOut/CheckOut';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>
       
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/addBook">
             <AddBook></AddBook>
            </PrivateRoute>
            <PrivateRoute path="/manageBook">
              <ManageBook></ManageBook>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/deals">
              <Deals></Deals>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>

    </div>
  );
}

export default App;
