import { makeAutoObservable } from "mobx"
class User {
    login = false || localStorage.getItem('login')
    user = {}

    constructor() {
        makeAutoObservable(this)
    }
    handleLogin(data) {
        this.login = true;
        this.user = data
    }
    handleLogout() {
        this.login = false;
    }
}
const UserStore = new User()
export default UserStore