import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../item-list';
import clsx from 'clsx';

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


const ItemsList = ({open}) => {
    const classes = useStyles();

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <div class='robotics-info'>

                <div class='robotics-info__title'>
                    <h1>Список статей по робототехнике</h1>
                </div>

                <div class='robotics-info__list-items'>
                    <ItemList />
                </div>
            </div>
        </main>
    )
}

export default ItemsList