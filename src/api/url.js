const BASE_URL = process.env.VUE_APP_BASE_URL;

// user API
export const USER_URL = `${BASE_URL}/user`;
export const SIGNIN_URL = `${BASE_URL}/user/signin`;
export const DUPLICATION_URL = `${BASE_URL}/user/duplication`;


// board API
export const BOARD_URL = `${BASE_URL}/board`;


// auth API
export const AUTH_URL = `${BASE_URL}/auth`;
export const VERIFICATION_URL = `${BASE_URL}/auth/verification`;