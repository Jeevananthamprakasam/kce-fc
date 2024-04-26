import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './food.css'
function Food() {

  const [food,setFood]=useState(null);

  useEffect(()=>{
   const fetchData= async ()=>{
    try{
      const response= await axios.get("http://localhost:7000/getfoods")
      setFood(response.data);
    }
    catch(error){
      console.log(error);
    }
  };
  fetchData();
  },[]);
  console.log({food});
  return (
    <div className='card-food'>

      {food?.map((val, id) => (
        <form className='card'>
          <img className='card-img' src={val.url}></img>
          <h3>{val.name}</h3>
          <h3>{"₹"+val.price}</h3>
          <button className='add-button'>Add to cart</button>
        </form>
      ))}
    </div>
  )
}
export default Food