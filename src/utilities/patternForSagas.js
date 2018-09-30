import { LOCATION_CHANGE } from 'connected-react-router';

export const locationChange = pathname => ({ type, payload }) => type === LOCATION_CHANGE && payload.location.pathname.startsWith(pathname);
