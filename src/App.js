import { Login } from './components/Login/Login'
import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Main } from './components/Main/Main'
import { NewsPage } from './components/NewsPage/NewsPage';
import { useSelector } from 'react-redux'
/* import { ProtectedRouter } from './components/ProtectedRouter/ProtectedRouter'; */

const App = (() => {
  const login = useSelector(state => state.login)
  return (
    <div className="App">
      <Routes>
        {/*  <Route path="/login" element={login
        ?<Navigate to='/news' />
        :<Login />} />
        <Route path="/news" element={
          <ProtectedRouter>
            <Main />
          </ProtectedRouter>
        }/>
        <Route path={`/news/:id`} element={<NewsPage />} />
        <Route path="*" element={<Navigate to='/news' />} /> */}
        {login
          ?
          <>
            <Route path={`/news/:id`} element={<NewsPage />} />
            <Route path='/news' element={<Main />} />
            <Route path="*" element={<Navigate to='/news' />} />
          </>
          :
          <> 
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to='/login' />} />
          </>
        }
      </Routes>
    </div>
  );
})




export default App;
