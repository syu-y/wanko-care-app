import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoodForm from './FoodForm'
import WalkForm from './WalkForm'
import styled from 'styled-components';

const RootFormWrapper = styled.div`
  /* background-color: LightBlue; */
  display: flex;
  margin: 20px auto;
  /* position: relative; */
  /* top: 100px; */
`

const FormWrapper = styled.div`
  display: flex;
  margin: auto;
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
