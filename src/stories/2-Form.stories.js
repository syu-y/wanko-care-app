import React from 'react';
import { action } from '@storybook/addon-actions';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export default {
  title: 'Form',
};

const StyledCheckbox = styled(Checkbox)`

`;

const StyledCard = styled(Card)`
  width: 200px;
`;

const StyledCardContent = styled(CardContent)`
  background-color: #acf
`;

const foodGroup ={
  title: "ごはん",
  first: "A",
  second: "B",
  third: "C"
}

const walkGroup ={
  title: "お散歩",
  first: "A",
  second: "B",
  third: "C"
}

export const Form = (LabelGroup) => (
  <div className="Form">
    <StyledCard>
      <StyledCardContent>
        <FormGroup>
          <FormControl component="fieldset" className="Checked">
            <FormLabel component="legend">{LabelGroup.title}</FormLabel>
            <FormControlLabel
              control={<StyledCheckbox/>}
            >{LabelGroup.first}</FormControlLabel>
            <FormControlLabel
              control={<StyledCheckbox/>}
              label={LabelGroup.second}
            />
            <FormControlLabel
              control={<StyledCheckbox/>}
              label={LabelGroup.third}
            />
          </FormControl>
        </FormGroup>
      </StyledCardContent>
    </StyledCard>
  </div>
);

export const GridForm = () => (
  <Grid container spacing={3}>
    <Grid item xs={3}>
      <Form LabelGroup={foodGroup}/>
    </Grid>
    <Grid item xs={3}>
      <Form LabelGroup={walkGroup}/>
    </Grid>
  </Grid>
)
