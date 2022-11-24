import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'features/auth/pages/Login';
import SignUp from 'features/auth/pages/Singup';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    );
}

export default App;
