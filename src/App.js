import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Header from './components/Header'
import RootForm from './components/RootForm'

function App() {
  return (
    <div className="App">
      <Header/>
      <RootForm/>
    </div>
  );
}

export default App;
