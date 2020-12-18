import React from 'react';


export default function List(props) {
    const { list } = props;
    const { deleteItem } = props;

    return (
        list.map((item) => {//отрисовываем список
            return <div className='item_box' key={item.date}>
                        <div>{ (item.date).split('-').reverse().join('.') }</div>
                        <div>{ item.distance }</div>
                        {/*используем стрелочную функцию для передачи аргумента в обработчике, по другому не работает*/}
                        <button className='material-icons' onClick={()=>deleteItem(item.date)}>close</button>
                    </div>
        })
    )
}