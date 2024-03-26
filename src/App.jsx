import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Result from './Result';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='result' element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
