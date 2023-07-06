import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './redux/Home'
import Edit from './redux/Edit'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      </Routes></BrowserRouter>
    </div>
  )
}

export default App
