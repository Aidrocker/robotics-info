import React from 'react';

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
                    <h3>Article Author</h3>
                </div>
                <div className='item-list__info__date'>
                    <h3>Article Date</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemList;