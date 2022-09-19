const BASE_URL = process.env.VUE_APP_BASE_URL;

// user API
export const USER_URL = `${BASE_URL}/user`;
export const SIGNIN_URL = `${USER_URL}/signin`;
export const DUPLICATION_URL = `${USER_URL}/duplication`;
export const PROFILE_URL = `${USER_URL}/profile`


// board API
export const BOARD_URL = `${BASE_URL}/board`;


// auth API
export const AUTH_URL = `${BASE_URL}/auth`;
export const VERIFICATION_URL = `${AUTH_URL}/verification`;