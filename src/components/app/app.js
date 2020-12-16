import React from 'react';

//Components
import ItemsList from '../items-list'
import SearchPanel from '../search-panel';
import ItemPage from '../item-page'
//Style
import './app.css'
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

const drawerWidth = 240;

const data = [
  {
    title: "Математические основы квантовой механики",
    author: "Дж. фон Нейманн",
    date: {
      day: 1,
      month: 3,
      year: 2020
    },
    content: "Article Content...",
    link: "/article-link-1"
  },
  {
    title: "Математические основы квантовой механики",
    author: "Дж. фон Нейманн",
    date: {
      day: 1,
      month: 3,
      year: 2020
    },
    content: "Article Content...",
    link: "/article-link-1"
  },
  {
    title: "Математические основы квантовой механики",
    author: "Дж. фон Нейманн",
    date: {
      day: 1,
      month: 3,
      year: 2020
    },
    content: "Article Content...",
    link: "/article-link-1"
  },
  {
    title: "Математические основы квантовой механики",
    author: "Дж. фон Нейманн",
    date: {
      day: 1,
      month: 3,
      year: 2020
    },
    content: "Article Content...",
    link: "/article-link-1"
  },
  {
    title: "Математические основы квантовой механики",
    author: "Дж. фон Нейманн",
    date: {
      day: 1,
      month: 3,
      year: 2020
    },
    content: "Article Content...",
    link: "/article-link-1"
  }
]

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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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

        <SearchPanel />
      </Drawer>
      <ItemsList open={open} data={data} />
      {/* <ItemPage open={open} /> */}

    </div>
  );
}