import React, { Component } from 'react';
import{ connect } from "react-redux";
import styled from 'styled-components';
import firebase from 'firebase/app';
import firebaseApp from "./firebase";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RootForm from './RootForm';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const ImageWrapper = styled.div`
  display: block;
  margin: 10px auto;
  width: 300px;
  height: 300px;
  background-color: #c0c0c0;
  background-image: url(${props => props.url});
  background-size: cover;
`

class AppMainContents extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {},
      url: "",
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })

    var firestorage = firebaseApp.storage();
    var storageRef = firestorage.ref();
    var imgSample = storageRef.child('send');

    imgSample.getDownloadURL().then( url => {
      this.setState( {url: url} );
      console.log(url);
    }).catch(function(error) {
      // Handle any errors
      console.log(error);
    });
  }


  classes = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  render() {
    // console.log(this.state.user);

    return (
      <main className="MainContents" id="MainContents">
        <div className={this.classes.heroContent}>
          <Container maxWidth="sm">
            <ImageWrapper id="imgArea" url={this.state.url} ></ImageWrapper>
            {this.state.user ? (
              <RootForm/>
              )
            : (<div></div>) }
          </Container>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.loginUser
  }
}

export default connect(mapStateToProps)(AppMainContents)
