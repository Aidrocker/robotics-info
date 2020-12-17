import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const SearchPanel = ({ setText }) => {

  const [text, onChangeText] = useState("")
  const handleSetText = (event) => {
    event.preventDefault();
    onChangeText(event.target.value);
  }

  const onSetText = () => {
    setText(text)
  }
  
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 13) {
      setText(text);
    }

  }

  return (
    <FormControl variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        onChange={handleSetText}
        placeholder="О чём статья ?"
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained" onClick={onSetText}><SearchIcon /></Button>
          </InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        labelWidth={0}
      />
    </FormControl>
  )
}

export default SearchPanel;