import React from 'react'
import './food.css'
import axios from 'axios';
import { useState, useEffect } from 'react'
function Drinks() {
    const [Drinks, setDrinks] = useState(null);
    useEffect = (() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:7000/getdrinks')
                setDrinks(res);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='card-food'>
            {Drinks?.map((val, id) => (
                <form className='card'>
                    <img className='card-img' src={val.url}></img>
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <button className='add-button'>Add to cart</button>
                </form>
            ))}
        </div>
    )
}
export default Drinks