import { Login } from './components/Login/Login'
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useEffect, useState } from 'react';
import UserStore from './utils/store/UserData'
import { Main } from './components/Main/Main'
import { observer } from "mobx-react"
import { NewsPage } from './components/NewsPage/NewsPage';
const App = observer(() => {
  const { login } = UserStore
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
