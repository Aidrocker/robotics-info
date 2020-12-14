import React from 'react';


//Style
import './item-page.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
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


const ItemPage = ({open}) => {
    const classes = useStyles();

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className='item-page'>
                <div className='item-page__title'>
                    <h2>Article title</h2>
                </div>
                <div className='item-page__info__author'>
                    <h3>Article Author</h3>
                </div>
                <div className='item-page__info'>
                    <div className='item-page__info__content'>
                        <h3>Content</h3>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default ItemPage;