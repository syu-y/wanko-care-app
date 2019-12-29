import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoodForm from './FoodForm'
import WalkForm from './WalkForm'
import styled from 'styled-components';

const RootFormWrapper = styled.div`
  /* background-color: LightBlue; */
  display: flex;
  margin: auto;
  /* position: relative; */
  /* top: 100px; */
`

const FormWrapper = styled.div`
  display: flex;
  margin: 5% 2%;
`

function RootForm() {
  return (
    <RootFormWrapper>
      <FormWrapper>
        <FoodForm/>
      </FormWrapper>
      <FormWrapper>
        <WalkForm/>
      </FormWrapper>
    </RootFormWrapper>
  );
}

export default RootForm;
