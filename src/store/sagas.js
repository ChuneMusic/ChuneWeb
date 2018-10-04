import { fork } from 'redux-saga/effects';

// import { sagasMusicPlayer as musicPlayer } from './musicPlayer/sagas';
import { sagasSpotify as spotify } from './spotify/sagas';
import { sagasAuthUser as auth } from './auth/sagas';
import { sagasArtists as artists } from './artists/sagas';
import { sagasSearch as search } from './autosuggest/sagas';
import { sagasContent as content } from './content/sagas';
import { sagasEvents as events } from './events/sagas';

export function* rootSagas() {
  yield fork(auth);
  // yield fork(musicPlayer);
  yield fork(spotify);
  yield fork(search);
  yield fork(artists);
  yield fork(content);
  yield fork(events);
}
