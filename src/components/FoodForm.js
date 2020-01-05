import React from 'react';
import { firestore } from "firebase/app";
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

  const [foodState, setFoodState] = React.useState({
    first: false,
    second: false,
    third: false,
  });

  const handleChange = when => event => {
    console.log(when, ":", event.target.checked);
    setFoodState({ ...foodState, [when]: event.target.checked });
    firestore()
      .collection("states")
      .doc("food")
      .update({
        [when]: event.target.checked,
      });
  };


  const docRef = firestore().collection("states").doc("food");

  React.useEffect(() => {
    docRef.get().then(function(doc) {
      if (doc.exists) {
        setFoodState(doc.data());
        console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }, []);

  const { first, second, third } = foodState;

  return (
    <StyledFormWrapper>
      <StyledCard>
        <StyledCardContent>
          <FormGroup>
            <FormControl component="fieldset" className="Checked">
              <FormLabel component="legend">{LabelGroup.title}</FormLabel>
              <FormControlLabel
                control={<StyledCheckbox checked={first} onChange={handleChange('first')} value="first"/>}
                label={LabelGroup.first}
              />
              <FormControlLabel
                control={<StyledCheckbox checked={second} onChange={handleChange('second')} value="second"/>}
                label={LabelGroup.second}
              />
              <FormControlLabel
                control={<StyledCheckbox checked={third} onChange={handleChange('third')} value="third"/>}
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
