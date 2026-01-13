const AUTH_KEY = 'admin_auth';

//Login
export const login = (username, password) => {
    if (username === 'admin' && password === '123') {
        localStorage.setItem(AUTH_KEY, 'true');
        return true;
    }
    return false;
}

//Logout
export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
}

//Check Authenticated
export const isAuthenticated = () => {
    return localStorage.getItem(AUTH_KEY) === 'true';
}