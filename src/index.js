import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

// Router
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import "./index.css";


// Components
import Header from "./Components/header/header";
import ContactList from "./Components/ContactList/contactItem";
import Footer from "./Components/footer/footer";
import AddContact from "./Components/AddContact/addContact";
import EditContact from "./Components/EditList/editContact";
import Error404 from "./Components/Error404/error404";

class App extends Component {
  render(){
    return(
      <Provider store= {store}>
        <Router>
        <Header 
        />
          <Switch>
            <Route path = "/" exact component = {ContactList}></Route>
            <Route path = "/add-contact" exact component= { AddContact }></Route>
            <Route path = "/edit-contact" exact component= { EditContact }></Route>
            <Route path="" exact component={Error404} />
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));