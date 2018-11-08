import {
  createStore, combineReducers, applyMiddleware,
  compose
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import { rootSagas } from './sagas';
import { reducerError } from './error/reducer';
import { reducerSpotify } from './spotify/reducer';
import { reducerAuthUser } from './auth/reducer';
import { reducerArtists } from './artists/reducer';
import { reducerSearch } from './autosuggest/reducer';
import { reducerContent } from './content/reducer';
import { reducerEvents } from './events/reducer';
import { reducerLearningMachine } from './learningMachine/reducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  error: reducerError,
  dataSpotify: reducerSpotify,
  dataAuth: reducerAuthUser,
  dataArtists: reducerArtists,
  dataSearch: reducerSearch,
  dataContent: reducerContent,
  dataEvents: reducerEvents,
  dataMachine: reducerLearningMachine
});

const rootReducer = (state, action) => {
  let initState = state;
  if (action.type === 'LOG_OUT_USER') {
    initState = undefined;
  }
  return reducer(initState, action);
};

const userPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['dataAuth'],
  transforms: [
    createWhitelistFilter('dataAuth', ['token']),
    createTransform(
      state => state,
      state => Object.assign({}, state)
    ),
  ]
};

const persistedReducer = persistReducer(userPersistConfig, rootReducer);

const middleware = composeWithDevTools(
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      createLogger({ collapsed: true })
    )
  )
);

// const middleware = compose(
//   applyMiddleware(
//     routerMiddleware(history),
//     sagaMiddleware
//   )
// );

export const store = createStore(
  connectRouter(history)(persistedReducer),
  middleware
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
