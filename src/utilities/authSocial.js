import { store } from '../store/index';
import { loginSocialUser, createNewSocialUser } from '../store/auth/actions';
import { getAccessTokenSpotify } from '../store/spotify/actions';


const authenticateSocial = (popup, host, prov, auth) => {
  const url = popup.location.href;
  popup.close();

  const uri = url.split('?')[1];
  const params = uri.split('&');
  let code = null;
  if (params.length > 1) {
    params.forEach((p) => {
      const parts = p.split('=');
      const key = parts[0];
      const val = parts[1];
      if (key === 'code') {
        code = val;
      }
    });
  }
  if (!code) {
    alert('Something went wrong. Please try again');
    return null;
  }
  switch (auth) {
    case 'SIGNUP':
      store.dispatch(createNewSocialUser(code, host, prov));
      break;
    case 'SIGNIN':
      store.dispatch(loginSocialUser(code, host, prov));
      break;
    case 'OTHER':
      store.dispatch(getAccessTokenSpotify(code, host, prov));
      break;
    default:
      break;
  }
  return null;
};

export const openSocial = (url, prov, host, auth) => {
  const w = 450;
  const h = 600;
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  const left = ((width / 2) - (w / 2)) + dualScreenLeft;
  const top = ((height / 2) - (h / 2)) + dualScreenTop;


  const newWin = window.open(url, '_blank', `alwaysRaised=yes, scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`);

  const checkConnect = setInterval(() => {
    try {
      if (newWin.location.href.startsWith(host)) {
        clearInterval(checkConnect);
        authenticateSocial(newWin, host, prov, auth);
      }
    } catch (e) {
      console.log(e.message);
    }
  }, 100);
};
