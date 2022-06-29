import { Login } from './components/Login/Login'
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import { Main } from './components/Main/Main'
import { NewsPage } from './components/NewsPage/NewsPage';
import {requestTransform} from './utils/auth'
import { useSelector } from 'react-redux'

const App = (() => {
  const login = useSelector(state => state.login)
  const data = useSelector(state => state.auth)
  let navigate = useNavigate();
  const loginCheck = () => {
    if (login) {
    } else {
      navigate("/login")
    }
  } 
  useEffect(() => {
    loginCheck()
  }, [login])
  
 
  return (
    <div className="App">
      <Routes>
        {login
          ?
          <>
            <Route path="/news" element={<Main />} />
            <Route path={`/news/:id`} element={<NewsPage />} />
          </>
          : <Route path="/login" element={<Login />} />}
      </Routes>
    </div>
  );
})




export default App;
