import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { auth, createUserProfilrDocument } from "./firebase/farbase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentuser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";

// photoURL: userAuth.photoURL,displayName
class App extends React.Component {
  ucsubscrieFromAuth = null;
  componentDidMount = () => {
    this.ucsubscrieFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfilrDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          // console.log(this.state);
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  };

  componentWillUnmount = () => {
    this.ucsubscrieFromAuth();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <RegisterPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentuser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
