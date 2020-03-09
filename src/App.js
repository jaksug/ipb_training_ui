import React from "react";
import Homepage from "./page/homepage"
import Faq from "./page/faq"
import Schedule from "./page/shcedule"
import Product from "./page/product"
import Products from "./page/products"
import About from "./page/about"
import Contact from "./page/contact"
import Login from "./page/login"
import Profile from "./page/profile"
import Register from "./page/register"
import MyTraining from "./page/my_training"
import ProfileEdit from "./page/profile_edit"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/my_training">
            <MyTraining />
          </Route>
          <Route path="/profile-edit">
            <ProfileEdit />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}