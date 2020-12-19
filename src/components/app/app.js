import React, { useState } from 'react';
//Components
import ItemsList from '../items-list'
import SearchPanel from '../search-panel';
import ItemPage from '../item-page';

//Data
import data from '../../data/article';

//Style
import './app.css';

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
import { BrowserRouter as Router, Route } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleText = (text) => {
    setText(text)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const searchData = (data, text) => {
    if (text === '') {
      return data;
    }

    return data.filter((item) => {
      if (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        return item;
      } 
      if (item.author.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        return item;
      }
      if (new Array(item.date.day.toString()).indexOf(text) > -1) {
        return item;
      }
      if (new Array(item.date.month.toString()).indexOf(text) > -1) {
        return item;
      }
      if (new Array(item.date.year.toString()).indexOf(text) > -1) {
        return item;
      } 
      if (new Array(item.content.toString()).indexOf(text) > -1) {
        return item;
      }
    })
  }

  return (
    <Router>
      <div className='app'>

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
              className={clsx('menu-button', open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Робокеки
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className='drawer'
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: 'drawerPaper',
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <SearchPanel setText={handleText} />
        </Drawer>

        <Route path="/" exact >
          <ItemsList open={open} data={searchData(data, text)} />
        </Route>

        <Route path="/page" >
          <ItemPage open={open} />
        </Route>
      </div>
    </Router>
  );
}