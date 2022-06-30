import './Header.css';
import { useSelector, useDispatch } from 'react-redux'
import ButtonAppBar from '../UI/Bar/Bar';

export const Header = (() => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({ type: 'logout' })
    }
    return (
        <ButtonAppBar src={user.avatar_url} name={user.username} onClick={handleLogout} />
    )
})