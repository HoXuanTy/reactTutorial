import React from 'react';

const Item = (props) => {
    return (
        <div className='Menu_item'>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
};
export default Item;