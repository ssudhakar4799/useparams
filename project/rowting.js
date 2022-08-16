
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import React from 'react'
import Add from "./add"
import Fav from "./fav"
import Content from "./content"

import { Provider } from "react-redux"
import Stores from "./stores"

export default function Rowting() {
  return (
    <div>rowting
        <Provider store={Stores} >
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/content">content</Link>
            </li>
            <li>
                <Link to="/addcard">addcart</Link>
            </li>
            <li>
                <Link to="/favorite">favorite</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/content" element={<Content />}>content</Route>
            <Route path="/addcard/:id" element={<Add />}>addcart</Route>
            <Route path="/favorite" element={<Fav />}>favorite</Route>

        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  )
}
