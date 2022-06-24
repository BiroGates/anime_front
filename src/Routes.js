import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Consulta from './pages/consultar'
import Inserir from './pages/inserir'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Consulta/>}></Route>
            <Route exact path='/inserir' element={<Inserir/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
