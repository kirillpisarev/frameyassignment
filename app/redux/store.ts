import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '~/redux/root-reducer';
import { rootSaga } from '~/redux/root-saga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true });

const middlewares: Middleware[] = [sagaMiddleware, loggerMiddleware];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
