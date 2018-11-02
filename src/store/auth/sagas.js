import { put, takeEvery, call } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import {
  CREATE_NEW_USER, CREATE_NEW_SOCIAL_USER, LOGIN_USER,
  LOGIN_SOCIAL_USER, SUCCESS_GET_TOKEN
} from './types';
import {
  getTokenToServer, getProfileUserSocial,
  tokenVerifyCreate, refreshToken, registerNewSocialUser
} from './utilities/authUser';
import {
  successGetToken, successGetProfileSocial,
  logOutUser, errorSignUpUser, errorSignInUser
} from './actions';
import { errorMessage } from '../error/actions';
import { setUserToken } from '../../utilities/APIConfig';

export function* getTokenUser(action) {
  const { email, password, name } = action.payload;
  let newUser = true;
  if (action.type === 'CREATE_NEW_USER') newUser = true;
  else if (action.type === 'LOGIN_USER') newUser = false;
  try {
    const token = yield call(getTokenToServer, email, password, name, newUser);
    setUserToken(token);
    yield put(successGetToken(token));
  } catch (e) {
    if (e.response.status === 400) {
      const message = e.response.data.email || e.response.data.password || e.response.data.non_field_errors;
      if (action.type === 'CREATE_NEW_USER') yield put(errorSignUpUser(message[0]));
      else if (action.type === 'LOGIN_USER') yield put(errorSignInUser(message[0]));
    } else {
      yield put(errorMessage(e.message));
    }
  }
}
export function* rehydrateAuth({ payload }) {
  if (payload) {
    if (payload.dataAuth.token !== '') {
      try {
        const { token } = payload.dataAuth;
        let verifyToken = yield call(tokenVerifyCreate, token);
        if (verifyToken !== token) {
          verifyToken = yield call(refreshToken, token);
        }
        setUserToken(verifyToken);
        yield put(successGetToken(verifyToken));
      } catch (e) {
        yield put(logOutUser());
        yield put(errorMessage(e.message));
      }
    }
  }
}
export function* getProfile({ payload }) {
  const { token } = payload;
  const stg = '?access_token=';
  if (!token.includes(stg)) return;
  try {
    const profile = yield call(getProfileUserSocial, token);
    yield put(successGetProfileSocial(profile));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* getSocialUserToken(action) {
  try {
    const { code, redirectUri, provider } = action.payload;
    const token = yield call(registerNewSocialUser, code, redirectUri, provider);
    setUserToken(token);
    yield put(successGetToken(token));
  } catch (e) {
    if (action.type === 'CREATE_NEW_SOCIAL_USER') yield put(errorMessageSingUp(e.message));
    else if (action.type === 'LOGIN_USER') yield put(errorMessageSingIn(e.message));
  }
}

export function* sagasAuthUser() {
  yield takeEvery([CREATE_NEW_USER, LOGIN_USER], getTokenUser);
  yield takeEvery([CREATE_NEW_SOCIAL_USER, LOGIN_SOCIAL_USER], getSocialUserToken);
  yield takeEvery(REHYDRATE, rehydrateAuth);
  yield takeEvery(SUCCESS_GET_TOKEN, getProfile);
}
