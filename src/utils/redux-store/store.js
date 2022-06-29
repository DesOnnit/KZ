import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
const defaultState = {
    user: {},
    auth:null,
    login: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload.user, auth:action.payload.auth, login: true }
        case "logout":
            return {/*  ...state, */ login: false }
            default:
                return state
    }
}
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)