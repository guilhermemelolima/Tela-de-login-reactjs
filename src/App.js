import {Route, Routes} from 'react-router-dom'

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import  RequireAuth  from './contexts/auth/RequireAuth';

function App() {
  return (
    <Routes>
        <Route path='/' element={
            <RequireAuth>
                <Home />
            </RequireAuth>
        } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/cadastro' element={ <Cadastro /> } />
    </Routes>
  )
}

export default App;
