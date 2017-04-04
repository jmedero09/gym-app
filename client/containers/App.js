import React, {Component, PropTypes} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, fetchQuote, fetchSecretQuote} from '../actions';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Main from '../components/Main';

class App extends Component {

  render() {
    const {dispatch, isAuthenticated, errorMessage} = this.props;
    return (
      <div>
        <Router>
          <Route path="/" component={Main} isAuthenticated={isAuthenticated} dispatch={dispatch} errorMessage={errorMessage}></Route>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  const {auth} = state;
  const {isAuthenticated, errorMessage} = auth;

  return {isAuthenticated, errorMessage};
}

export default connect(mapStateToProps)(App);
