import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, sagaMiddleware);

sagaMiddleware.run(rootSaga);

export default store;


