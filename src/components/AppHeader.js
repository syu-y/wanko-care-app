import React, { Component } from 'react';
import{ connect } from "react-redux";
import { loginAuthStatus, logoutAuthStatus } from '../reducers'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const StyledHeader = styled.div`
  flex-grow: 1;
  .MuiTypography-root.MuiTypography-h6{
    margin-right: 0.8em;
  }
  .MuiTypography-root.MuiTypography-button{
    margin-right: 0.8em;
  }
`

const StledIcon = styled(PetsIcon)`
  margin-right: 0.5em;
`

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  margin-right: 0.8em;
`

const StyledLink = styled(Link)`
  margin: spacing(1, 1.5);
`

class AppHeader extends Component {

  state = { user: {} }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    const { onLogin, onLogout } = this.props;
    return (
      <StyledHeader>
        <AppBar position="relative">
          <Toolbar>
            <StledIcon/>
            <StyledTypography variant="h5" color="inherit" noWrap>
              Wanko App
            </StyledTypography>
            <StyledTypography variant="h6" color="inherit" align="right" noWrap>
              {this.state.user && this.state.user.displayName}
            </StyledTypography>
            {this.state.user ? (<StyledLink variant="button" color="textPrimary" href="/">Board</StyledLink>) : (<div></div>) }
            {this.state.user ? (<StyledLink disable="true" variant="button" color="textPrimary" href="/photo">Photo</StyledLink>) : (<div></div>) }
            {this.state.user ? (
                <Button color="inherit" align="right" onClick={ () => this.props.onLogout()}>Logout</Button>
              ) : (
              <Button color="inherit" align="right" onClick={ () => this.props.onLogin()}>Login</Button>
            )}
          </Toolbar>
        </AppBar>
      </StyledHeader>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.loginUser
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onLogin(){
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
      dispatch(loginAuthStatus(firebase.auth().currentUser))
    },
    onLogout(){
      firebase.auth().signOut()
      dispatch(logoutAuthStatus(firebase.auth().currentUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
