import './Header.css';
import { useSelector,useDispatch } from 'react-redux'

export const Header =(() => {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({type:'logout'})
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__user-info">
                    <img src={user.avatar_url} className="header__avatar" />
                    <h2>{user.username}</h2>
                </div>
                <button onClick={handleLogout} className="header__btn">ВЫХОД</button>
            </div>
        </div>
    )
})