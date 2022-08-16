import Product from "../productlist/products.json"

import React from 'react'
import { useSelector,useDispatch} from "react-redux/es/exports"

import { addcart ,favorite} from "./slices";
import { useNavigate } from "react-router-dom";

export default function Content() {

    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(state);

    const nav=useNavigate()

  function add(items) {
    dispatch(addcart([...state.cart.cart,items]))
    
  }
  
  function fav(items) {
    dispatch(favorite([...state.fav.fav,items]))
    
  }
  return (
    <div>content
        {
            Product.map((data,index)=>{
                return(
                    <div key={index}>
                        <h1>{data.name}</h1>
                        <button onClick={()=>add(data)}>addcart</button>
                        <button onClick={()=>fav(data)}>favorite</button>
                        <button onClick={()=>nav("/addcard/2359")}>params</button>
                        <button onClick={()=>nav({
                          pathname:"/favorite",
                          search:"?id=56",
                        })}>params</button>

                    </div>
                )

            })
        }
    </div>
  )
}
