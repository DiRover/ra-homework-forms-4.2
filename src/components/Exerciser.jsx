import React, { useState } from 'react';
import List from './List';
import compare from './compare';


export default function Exerciser(props) {
    const [ state, setState ] = useState({
        date: '',
        distance: '',
        list: [],
    })
    const handleSubmit = (params) => {
        params.preventDefault();
        if (!state.date) return;//проверям наличие введённой даты
        if (!state.distance) return;//проверяем наличие введённой дистанции
        const obj = {date: state.date, distance: state.distance};
        let ind;
        state.list.forEach((item, index) => { //проверяем наличие совпадения дат
            if (item.date === state.date) { //если дата уже есть, складываем дистанцию
                obj.distance = Number(item.distance) + Number(obj.distance);
                ind = index;
            }
        });
        if (ind !== undefined) {//если совпадение было, то заменяем объект в массиве
            state.list.splice(ind, 1, obj);//на объект с увеличенной дистанцией
        } else if (state.list.length === 0 || !ind) {//если это первый ввод или совпадение дат отсутствует
            state.list.push(obj);
        }

        setState((prevState) => {//создаём список
            return {...prevState, list: state.list.sort(compare)};//сортируем массив
        })
    }

    const handleDate = (params) => {//обработчик для записи даты
        const valueDate = params.target.value;
        setState((prevState) => {return {...prevState, date: valueDate}});
    };

    const handleDistance = (params) => {//обработчик для записи дистанции
        const valueDistance = params.target.value;
        setState((prevState) => {return {...prevState, distance: valueDistance}});
    };

    const handleDeleteItem = (params) => {//обработчик для удаления
        setState((prevState) => {
            return {...prevState, list: state.list.filter((item) => item.date !== params)};
        })
    }

    return (
        <div className='container'>
            
            <header className='header'>
                <div className='title date-title'>Date</div>
                <div className='title distance-title'>Distance</div>
            </header>
            <div className='container-form'>
                <form className='form'>
                    
                    <input id="date" name="date" type="date" onChange={handleDate}/>
                    
                    <input id="distance" name="distance" type='number' onChange={handleDistance}/>
                    
                </form>
                <button className='button' onClick={handleSubmit}>Ok</button>
            </div>
            <List list = { state.list } deleteItem = {  handleDeleteItem } />
        </div>
    )
}