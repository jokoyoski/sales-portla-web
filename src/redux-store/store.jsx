
import rootReducer from "../redux-store/combine-reducer/combine-reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../redux-store/root-saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const initialiseSagaMiddleware = createSagaMiddleware();   //created the saga 

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer', 'productDetailsReducer', 'cartReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    storeEnhancers(                              //sga middleware
        applyMiddleware(initialiseSagaMiddleware)
    )
);

const persistor = persistStore(store)


initialiseSagaMiddleware.run(RootSaga);

export { persistor, store };
// export default store;   