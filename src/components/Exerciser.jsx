import React, { useState } from 'react';
import List from './List';
import sort from './sort';


export default function Exerciser(props) {
    const [ state, setState ] = useState({
        date: '',
        distance: '',
        list: [],
    })
    const handleSubmit = (params) => {
        params.preventDefault();
        if (!state.date) return;
        if (!state.distance) return;
        const obj = {date: state.date, distance: state.distance};
        const arr = state.list.map((o) => {
            if (o.date === obj.date) {
                o.distance = Number(o.distance) + Number(obj.distance);
                return o;
            } else if (state.d)
        })
        const listNew = state.list.length === 0 ? [obj] : [...state.list, obj];
        setState((prevState) => {
            
            return {...prevState, list: listNew};
        })
    }

    const handleDate = (params) => {
        //console.log('ok date');
        const valueDate = params.target.value;
        setState((prevState) => {return {...prevState, date: valueDate}});
    };

    const handleDistance = (params) => {
        //console.log('ok distance');
        const valueDistance = params.target.value;
        setState((prevState) => {return {...prevState, distance: valueDistance}});
        //console.log(valueDistance);
    };

    return (
        <div className='container'>
            <div className='container-form'>
                <form className='form'>
                    <label htmlFor="date" className='label'>Date</label>
                    <input id="date" name="date" type="date" onChange={handleDate}/>
                    <label htmlFor="distance" className='label'>Distance</label>
                    <input id="distance" name="distance" onChange={handleDistance}/>
                    <button onClick={handleSubmit}>Ok</button>
                </form>
            </div>
            <List list = { state.list } />
        </div>
    )
}