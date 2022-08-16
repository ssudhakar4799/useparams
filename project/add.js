import { useSelector } from 'react-redux/es/hooks/useSelector'

import { useParams } from 'react-router-dom';

import React from 'react'


export default function Add() {
    const state=useSelector((state)=>state)
    console.log(state);

    const {id}=useParams();
    console.log(id);


  return (
    <div>add <br></br>
        {id}
        {
            state.cart.cart.map((datas,index)=>{
                return(
                    <div key={index}>
                        <h1>{datas.name}</h1>
                        
                    </div>
                )
            })
        }
    </div>
  )
}
