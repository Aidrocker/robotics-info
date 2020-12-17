import React from 'react';

//Style
import './items-list.css'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../item-list';
import clsx from 'clsx';
import Pagination from '@material-ui/lab/Pagination';

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
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
}));

const ItemsList = ({ open, data }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 3


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


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
                    {(itemsPerPage > 0
                        ? data.slice((page-1) * itemsPerPage, (page-1) * itemsPerPage + itemsPerPage)
                        : data
                    ).map((item, id) => (
                        <div key={id}>
                            <ItemList {...item} />
                        </div>
                    ))}
                    <div className='items-list__pagination'>
                        <Pagination
                            count={data.length}
                            defaultPage={1}
                            siblingCount={1}
                            onChange={handleChangePage}
                            page={page}
                            boundaryCount={2} />

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ItemsList
