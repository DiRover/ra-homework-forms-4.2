import React from 'react';
import reverse from './reverse';

export default function List(props) {
    const { list } = props;
    
    console.log(list);
    
    return (
        list.map((item) => {
            return <div className='item_box'>
                <div>{ reverse(item.date) }</div>
                <div>{ item.distance }</div>
                <div className='material-icons'>edit</div>
                <div className='material-icons'>close</div>
            </div>
        })
    )
}