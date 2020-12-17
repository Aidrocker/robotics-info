import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';

const SearchPanel = ({setText}) => {
  const handleSetText = (event) => {
    event.preventDefault();
    setText(event.target.value)
  }


  return (
    <FormControl variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        onChange={handleSetText}
        placeholder="О чём статья ?"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon/>
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