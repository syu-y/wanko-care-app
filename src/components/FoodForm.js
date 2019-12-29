import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    position: relative;
`

const StyledCheckbox = styled(Checkbox)`
`;

const StyledCard = styled(Card)`
  display: flex;
  width: 200px;
`;

const StyledCardContent = styled(CardContent)`
  background-color: #afc
`;

function FoodForm() {
  const LabelGroup ={
    title: "ごはん",
    first: "8:00 ~ 9:00",
    second: "17:00 ~ 18:00",
    third: "21:00 ~ 22:00"
  }

  return (
    <StyledFormWrapper>
      <StyledCard>
        <StyledCardContent>
          <FormGroup>
            <FormControl component="fieldset" className="Checked">
              <FormLabel component="legend">{LabelGroup.title}</FormLabel>
              <FormControlLabel
                control={<StyledCheckbox/>}
                label={LabelGroup.first}
              />
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
    </StyledFormWrapper>
  );
}

export default FoodForm;
