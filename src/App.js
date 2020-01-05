import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AppMainContents from './components/AppMainContents'
import UploadPhotoContents from './components/UploadPhotoContents'
import AppHeader from './components/AppHeader';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <AppHeader/>
          <Route path='/' exact component={AppMainContents}/>
          <Route path='/photo' exact component={UploadPhotoContents}/>
        </React.Fragment>
      </Router>
      /* <AppWrapper>
        <DesktopContainer/>
      </AppWrapper> */
      /* <AppWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={12}>
            <RootForm/>
          </Grid>
        </Grid>
      </AppWrapper> */
    );
  }
}

export default App;
