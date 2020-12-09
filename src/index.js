import React from 'react';
import ReactDOM from 'react-dom';
//Components
import ItemsList from './components/items-list'


//Material UI
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Робокеки
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

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
      </Drawer>
      <ItemsList open={open}/>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);