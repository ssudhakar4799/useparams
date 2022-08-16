
import { useSelector } from 'react-redux/es/hooks/useSelector'
import React from 'react'
import { useSearchParams } from 'react-router-dom';
export default function Fav() {
    const state =useSelector((state)=>state);
    console.log(state);

    const search=useSearchParams()
    console.log(search);
  return (
    <div>fav <br></br>
        {search[0].get("id")}
        {
            state.fav.fav.map((data,index)=>{
                return(
                <div key={index}>
                    <h1>{data.name}</h1>
                </div>

            )})
        }
    </div>
  )
}
