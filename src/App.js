import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// photoURL: userAuth.photoURL,
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
