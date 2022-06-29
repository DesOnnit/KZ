import { createStore,applyMiddleware  } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
const defaultState = {
    user: {},
    data:null,
    login: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload.user, data:action.payload.data, login: true }
        case "logout":
            return { login: false }
            default:
                return state
    }
}
const persistedReducer = persistReducer(persistConfig, reducer)
export const storeAuth = (state) => state.data
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)