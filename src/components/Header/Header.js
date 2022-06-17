import './Header.css';
import UserStore from "../../utils/store/UserData"
import { useState } from 'react';
import { observer } from "mobx-react"
export const Header = observer(() => {
    const { user } = UserStore
    const [data] = useState(JSON.parse(localStorage.getItem('user')) || user)
    const handleLogout = () => {
        localStorage.clear();
        UserStore.handleLogout()
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__user-info">
                    <img src={data.avatar_url} className="header__avatar" />
                    <h2>{data.username}</h2>
                </div>
                <button onClick={handleLogout} className="header__btn">ВЫХОД</button>
            </div>
        </div>
    )
})