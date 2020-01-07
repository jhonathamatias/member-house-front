const BASE_KEY = '@mhouse';

const TOKEN_KEY = `${BASE_KEY}-token`;

const USER_KEY = `${BASE_KEY}-user`;

export function hasToken() {
    return localStorage.getItem(TOKEN_KEY) !== null;
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
}

export function setUser(user) {
    localStorage.setItem(USER_KEY, user);
}
