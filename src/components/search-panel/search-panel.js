import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const SearchPanel = () => {
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        placeholder="О чём статья ?"
        endAdornment={
          <InputAdornment position="end">
            <img width='30px' height='20px' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDEyLjMzOCA0MTIuMzM4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTIuMzM4IDQxMi4zMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNNDA0LjI3NSwzNjIuODhMMjk5LjE4OCwyNTcuNzk0Yy0zLjU4NS0zLjYwMS04LjEyLTUuODY5LTEyLjkyNC02Ljk3NA0KCQljMTguMTc2LTI1LjY3LDI4Ljk2Mi01Ni45MjQsMjguOTYyLTkwLjcxNWMwLTg2LjkxMS03MC42OTQtMTU3LjYxMy0xNTcuNjEzLTE1Ny42MTNDNzAuNzAyLDIuNDkxLDAsNzMuMTg2LDAsMTYwLjEwNA0KCQljMCw4Ni45MDMsNzAuNzAyLDE1Ny42MDUsMTU3LjYxMywxNTcuNjA1YzM2LjA3NSwwLDY5LjIzOS0xMi4zNTUsOTUuODItMzIuODQ4YzEuMjM2LDQuMzI0LDMuNDM4LDguNDI5LDYuODM2LDExLjgzNQ0KCQlsMTA1LjEwMiwxMDUuMDk0YzUuMjAyLDUuMjAyLDEyLjEwMyw4LjA1NSwxOS40Niw4LjA1NXMxNC4yNTgtMi44NjEsMTkuNDUyLTguMDU1YzUuMjAyLTUuMjAyLDguMDY0LTEyLjExMiw4LjA1NS0xOS40NzYNCgkJQzQxMi4zMywzNzQuOTY3LDQwOS40NjksMzY4LjA2Niw0MDQuMjc1LDM2Mi44OHogTTE2LjI0OSwxNjAuMDk2YzAtNzcuOTQ1LDYzLjQxMS0xNDEuMzU2LDE0MS4zNTYtMTQxLjM1Ng0KCQljNzcuOTM3LDAsMTQxLjM0OCw2My40MTEsMTQxLjM0OCwxNDEuMzU2YzAsMzcuMzgzLTE0LjcwNSw3MS4zMjgtMzguNDgxLDk2LjY0MWMtMC4xMTQsMC4wOTgtMC4yMjgsMC4xMzgtMC4zNSwwLjIyOA0KCQljLTAuMTYzLDAuMTcxLTAuMjAzLDAuMzktMC4zNjYsMC41NDVjLTI1Ljc1MSwyNi45OTUtNjEuOTgsNDMuOTE5LTEwMi4xMzYsNDMuOTE5Qzc5LjY2OCwzMDEuNDQ0LDE2LjI0OSwyMzguMDI1LDE2LjI0OSwxNjAuMDk2eg0KCQkgTTM5Mi43ODEsMzkwLjI4OWMtNC4yNTEsNC4yNTktMTEuNjY0LDQuMjUxLTE1LjkxNiwwTDI3MS43NjMsMjg1LjIwM2MtNC4zODEtNC4zODktNC4zODEtMTEuNTM0LDAtMTUuOTI0DQoJCWMyLjEzLTIuMTMsNC45NTgtMy4zLDcuOTY2LTMuM3M1LjgyOCwxLjE3OSw3Ljk1OCwzLjNMMzkyLjc4OSwzNzQuMzljMi4xMjIsMi4xMjIsMy4yODQsNC45MzQsMy4yODQsNy45NDINCgkJQzM5Ni4wODEsMzg1LjMzMSwzOTQuOTExLDM4OC4xNjgsMzkyLjc4MSwzOTAuMjg5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
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