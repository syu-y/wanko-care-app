import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoodForm from './FoodForm'
import WalkForm from './WalkForm'
import styled from 'styled-components';

const RootFormWrapper = styled.div`
  position: relative;
  top: 100px;
`

function RootForm() {
  return (
    <RootFormWrapper>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <FoodForm/>
        </Grid>
        <Grid item xs={2}>
          <WalkForm/>
        </Grid>
      </Grid>
    </RootFormWrapper>
  );
}

export default RootForm;
