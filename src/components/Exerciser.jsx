import React, { useState } from 'react';
import List from './List';
import reverse from './reverse';


export default function Exerciser(props) {
    const [ state, setState ] = useState({
        date: '',
        distance: '',
        list: [],
    })
    const handleSubmit = (params) => {
        params.preventDefault();
        //if (!state.date) return;
        //if (!state.distance) return;
        setState((prevState) => { 
            state.list.push({dateNew: state.date, distanceNew: state.distance});
            return {...prevState, list: state.list}});
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