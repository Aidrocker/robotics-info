import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
//Style
import './item-list.css'

const ItemList = (props) => {
    const {
        title,
        author,
        date,
        content,
        link
    } = props;
    return (
        <div className='item-list'>
            <div className='item-list__title'>
                <h2>{title}</h2>
            </div>
            <div className='item-list__info'>
                <div className='item-list__info__author'>
                    <PersonIcon />
                    <h3>{author}</h3>
                </div>
                <div className='item-list__info__date'>
                    <CalendarTodayIcon />
                    <h3>{date.day}.{date.month}.{date.year}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemList;

