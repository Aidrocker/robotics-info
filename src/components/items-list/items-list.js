import React from 'react';

//Style
import './items-list.css'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../item-list';
import clsx from 'clsx';
import { render } from '@testing-library/react';



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

const ItemsList = ({ open, data }) => {
    const classes = useStyles();

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <div className='robotics-info'>

                <div className='robotics-info__title'>
                    <h1>Список статей по робототехнике</h1>
                </div>

                <div className='robotics-info__list-items'>
                    {data.map((item, id) => {
                        return(
                            <div key={id}>
                                <ItemList {...item} />
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default ItemsList