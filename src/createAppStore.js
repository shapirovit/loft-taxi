import { createStore, applyMiddleware } from 'redux';
import reducerApp from './reducerApp';

import { userFetchingMiddleware, userFetchingRegistrMiddleware } from './moduls/fetchUser';
import { cardFetchingMiddleware } from './moduls/fetchCard';


// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './Sagas/rootSaga';

// const SagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
    // const store = createStore(reducerApp, applyMiddleware(SagaMiddleware));
    const store = createStore(reducerApp, applyMiddleware(userFetchingMiddleware, userFetchingRegistrMiddleware, cardFetchingMiddleware));

    // SagaMiddleware.run(rootSaga);

    return store;
}

export default createAppStore;