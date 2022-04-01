import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import TodosReducers from '../Reducers'

const reducers = {
    appData: TodosReducers
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const configPersist = persistReducer(persistConfig, combineReducers(reducers))

export const store = createStore(createStore(configPersist), applyMiddleware(ReduxThunk))
export const PersistStor = persistStore(Store)