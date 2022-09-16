import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'

const Views=()=> {
    return (
        <Routes>
            <Route path="/play" exact element={<>play</>}>
            </Route>
          <Route index exact  element={<>play</>} />
          <Route path="*" element={<>404 Not Found</>}/>
      </Routes>
      
  )
}
export default Views;