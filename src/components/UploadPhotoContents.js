import React, { Component } from 'react';
import{ connect } from "react-redux";
import firebase from 'firebase/app'
import firebaseApp from "./firebase";
import { firestore } from "firebase/app";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class UploadPhotoContents extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {},
      url: "",
      img: ''
    };
    this.btnUploadChange = this.btnUploadChange.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
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

  btnUploadChange = function(ev){
    console.log(this.state.img);
    if(this.state.url != ''){
      firestore().collection('photo').add({
        url: this.state.url,
        created_at: new Date(),
        }).then(() => {
        this.setState({
          url: '',
        });
      })
      let storageRef = firebase.storage().ref().child(this.state.url);
      storageRef.put(this.state.image)
                .then(function(snapshot) {
        alert("送信されました");
      });
    }
    else{
      alert("ファイルの名前を入力してください");
    }
  };

  getImage(event){
    let image = event.target.files[0];
    this.setState({
      image: image,
    });
  }

  render() {
    return (
      <main>
        <div className={this.classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            工事中
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Upload Photo
            </Typography>
              <input type="text" onChange={e => this.setState( {url: e.target.value} )} required/>
              <input type="file" id="btnUpload" onChange={(event)=>{this.getImage(event)}}/>
              <button label="Send" onClick={this.btnUploadChange}/>
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

export default connect(mapStateToProps)(UploadPhotoContents)
