import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtonsGroup(props) {
  const { onRatio} = props;
  const [value, setValue] = React.useState('1');

  const handleChange = (event) => {
    setValue(event.target.value);
    onRatio(event.target.value);
  };

  return (
    <FormControl component="fieldset" style = {{marginTop: '30px',marginLeft:'20px'}}>
      <FormLabel component="legend">IsActive</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<GreenRadio />} label="Active" />
        <FormControlLabel value="0" control={<Radio />} label="InActive" />
     
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>
  );
}
