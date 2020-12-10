import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
//Style
import './item-list.css'

const ItemList = () => {
    return (
        <div className='item-list'>
            <div className='item-list__title'>
                <h2>Article title</h2>
            </div>
            <div className='item-list__info'>
                <div className='item-list__info__author'>
                    <PersonIcon/>
                    <h3>Article Author</h3>
                </div>
                <div className='item-list__info__date'>
                    <CalendarTodayIcon/>
                    <h3>Article Date</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemList;