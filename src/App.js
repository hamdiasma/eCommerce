import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { auth, createUserProfilrDocument } from "./firebase/farbase";

// photoURL: userAuth.photoURL,displayName
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  ucsubscrieFromAuth = null;
  componentDidMount = () => {
    this.ucsubscrieFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfilrDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  };

  componentWillUnmount = () => {
    this.ucsubscrieFromAuth();
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
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
